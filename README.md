# Kotoba Pocket

An offline N5 Japanese study app for Genki I learners: dictionary, katakana-trap guide, flashcards, conjugation drill and kana practice.

**Use it:** https://yashsusir-arch.github.io/kotoba-pocket/ — open it on your phone once, then Add to Home Screen. After that it works with no connection.

## Editing

- Words and katakana traps live in `src/data.js` (one entry per line, `|`-separated).
- The app itself is `src/app.html`.
- Run `powershell -ExecutionPolicy Bypass -File build.ps1` to rebuild `docs/`, then commit and push.
- When you change the app, bump `CACHE` in the service worker (in `build.ps1`) so phones pick up the new version.
