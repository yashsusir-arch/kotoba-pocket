# Builds Kotoba Pocket.
#   docs/index.html  - standalone offline app, served by GitHub Pages (main branch, /docs)
#   docs/sw.js, manifest.webmanifest, icons - offline cache and home-screen install
#   build/artifact.html       - same app without the document wrapper, for the claude.ai preview
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)
$app  = [IO.File]::ReadAllText("$root\src\app.html", $utf8)
$data = [IO.File]::ReadAllText("$root\src\data.js", $utf8)
$body = $app.Replace('/*DATA*/', $data)

New-Item -ItemType Directory -Force "$root\build" | Out-Null
New-Item -ItemType Directory -Force "$root\docs" | Out-Null
[IO.File]::WriteAllText("$root\build\artifact.html", $body, $utf8)

$head = @'
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#2B4A9E">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Kotoba">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png">
<link rel="apple-touch-icon" href="icon-180.png">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
'@
[IO.File]::WriteAllText("$root\docs\index.html", $head + $body + "`n</body>`n</html>`n", $utf8)

$manifest = @'
{
  "name": "Kotoba Pocket",
  "short_name": "Kotoba",
  "description": "N5 Japanese dictionary, flashcards and conjugation drills that work offline.",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "background_color": "#F2F4F8",
  "theme_color": "#2B4A9E",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
'@
[IO.File]::WriteAllText("$root\docs\manifest.webmanifest", $manifest, $utf8)

$sw = @'
const CACHE = 'kotoba-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit ||
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match('./index.html')))
  );
});
'@
[IO.File]::WriteAllText("$root\docs\sw.js", $sw, $utf8)

Add-Type -AssemblyName System.Drawing
foreach ($size in 180, 192, 512) {
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'; $g.TextRenderingHint = 'AntiAliasGridFit'
  $g.Clear([System.Drawing.Color]::FromArgb(43, 74, 158))
  $fontName = 'Yu Mincho'
  if (-not ((New-Object System.Drawing.Text.InstalledFontCollection).Families.Name -contains $fontName)) { $fontName = 'MS Mincho' }
  $font = New-Object System.Drawing.Font($fontName, [single]($size * 0.5), [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $fmt = New-Object System.Drawing.StringFormat
  $fmt.Alignment = 'Center'; $fmt.LineAlignment = 'Center'
  $rect = New-Object System.Drawing.RectangleF(0, [single]($size * 0.03), $size, $size)
  $g.DrawString([string][char]0x8A00, $font, [System.Drawing.Brushes]::White, $rect, $fmt)
  $bmp.Save("$root\docs\icon-$size.png", [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}
Write-Output "Built docs\ and build\artifact.html"

