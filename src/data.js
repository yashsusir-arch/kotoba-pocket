// Kotoba Pocket data. Format: kanji|kana|english|pos|topic|note
// kanji is blank when the word is normally written in kana.
const VOCAB = `
|おはようございます|good morning|exp|phrases|Casual: おはよう.
|こんにちは|hello / good afternoon|exp|phrases|The final は is read わ.|konnichiwa
|こんばんは|good evening|exp|phrases|The final は is read わ.|konbanwa
|さようなら|goodbye|exp|phrases|Sounds a little final. With friends, say じゃあね or またね.
|おやすみなさい|good night|exp|phrases|Casual: おやすみ.
|ありがとうございます|thank you|exp|phrases|Casual: ありがとう.
|どういたしまして|you're welcome|exp|phrases|
|すみません|excuse me / I'm sorry / thanks|exp|phrases|Also how you call a waiter over.
|ごめんなさい|I'm sorry|exp|phrases|For personal apologies. Casual: ごめん.
|いただきます|(said before eating)|exp|phrases|
|ごちそうさまでした|(said after eating) thanks for the meal|exp|phrases|
|はじめまして|nice to meet you (first meeting)|exp|phrases|
よろしくお願いします|よろしくおねがいします|nice to meet you / please treat me well|exp|phrases|Said at the end of a self-introduction.
行ってきます|いってきます|I'm off (leaving home)|exp|phrases|
行ってらっしゃい|いってらっしゃい|see you, have a good day (to someone leaving)|exp|phrases|
|ただいま|I'm home|exp|phrases|
お帰りなさい|おかえりなさい|welcome home|exp|phrases|
お願いします|おねがいします|please (when asking for something)|exp|phrases|コーヒー、お願いします = Coffee, please.
|ください|please give me|exp|phrases|Thing + を + ください.
|はい|yes|exp|phrases|
|いいえ|no / not at all|exp|phrases|A flat いいえ can sound blunt. People often soften it.
|そうですね|that's right / let me see|exp|phrases|
|そうですか|I see / is that so?|exp|phrases|
大丈夫です|だいじょうぶです|I'm okay / no thanks|exp|phrases|
結構です|けっこうです|no thank you|exp|phrases|A firm refusal.
|どうぞ|please, go ahead / here you are|exp|phrases|
|どうも|thanks (casual)|exp|phrases|
|もしもし|hello (on the phone)|exp|phrases|
|あのう|um, excuse me (to get attention)|exp|phrases|
|ええと|let me see / um|exp|phrases|
|ちょっと…|well… (a polite way to say no)|exp|phrases|日曜日はちょっと… politely turns down Sunday without saying no.
ちょっと待ってください|ちょっとまってください|please wait a moment|exp|phrases|
もう一度お願いします|もういちどおねがいします|one more time, please|exp|phrases|
ゆっくりお願いします|ゆっくりおねがいします|more slowly, please|exp|phrases|
分かりません|わかりません|I don't understand / I don't know|exp|phrases|
分かりました|わかりました|I understand / got it|exp|phrases|
日本語で何と言いますか|にほんごでなんといいますか|how do you say it in Japanese?|exp|phrases|Say the English word first: "Umbrella" は日本語で何と言いますか。
これは何ですか|これはなんですか|what is this?|exp|phrases||kore wa nan desu ka
|トイレはどこですか|where is the restroom?|exp|phrases||toire wa doko desu ka
|いくらですか|how much is it?|exp|phrases|
|これをください|I'll take this one|exp|phrases|
お元気ですか|おげんきですか|how have you been?|exp|phrases|For someone you haven't seen in a while. It's not a daily "how are you".
元気です|げんきです|I'm fine|exp|phrases|
|じゃあ、また|see you|exp|phrases|
また明日|またあした|see you tomorrow|exp|phrases|
気をつけて|きをつけて|take care / be careful|exp|phrases|
お疲れ様です|おつかれさまです|thanks for your hard work|exp|phrases|Used all the time at school and work, even as a greeting.
失礼します|しつれいします|excuse me (entering or leaving a room)|exp|phrases|
|おめでとうございます|congratulations|exp|phrases|
誕生日おめでとう|たんじょうびおめでとう|happy birthday|exp|phrases|
お大事に|おだいじに|get well soon|exp|phrases|
頑張って|がんばって|good luck / do your best|exp|phrases|
本当ですか|ほんとうですか|really?|exp|phrases|
|いいですね|that sounds good|exp|phrases|
一緒に行きませんか|いっしょにいきませんか|would you like to go together?|exp|phrases|〜ませんか is a polite invitation.
お腹が空きました|おなかがすきました|I'm hungry|exp|phrases|
喉が渇きました|のどがかわきました|I'm thirsty|exp|phrases|
道に迷いました|みちにまよいました|I'm lost|exp|phrases|
写真を撮ってもいいですか|しゃしんをとってもいいですか|may I take a photo?|exp|phrases|〜てもいいですか asks permission (Lesson 6).
英語を話せますか|えいごをはなせますか|can you speak English?|exp|phrases|
私|わたし|I / me|pron|people|
|あなた|you|pron|people|Japanese people rarely say あなた. Use the person's name + さん instead.
彼|かれ|he / boyfriend|pron|people|
彼女|かのじょ|she / girlfriend|pron|people|
人|ひと|person|n|people|
あの人|あのひと|that person|n|people|
男の人|おとこのひと|man|n|people|
女の人|おんなのひと|woman|n|people|
男の子|おとこのこ|boy|n|people|
女の子|おんなのこ|girl|n|people|
子供|こども|child|n|people|
友達|ともだち|friend|n|people|
先生|せんせい|teacher / professor|n|people|Also used for doctors.
学生|がくせい|student|n|people|
大学生|だいがくせい|college student|n|people|
留学生|りゅうがくせい|international student|n|people|
会社員|かいしゃいん|office worker|n|people|
医者|いしゃ|doctor|n|people|
日本人|にほんじん|Japanese person|n|people|
〜人|〜じん|person from (country)|ctr|people|アメリカ人, イギリス人.
〜語|〜ご|language|ctr|people|日本語, 中国語.
名前|なまえ|name|n|people|
仕事|しごと|job / work|n|people|
専攻|せんこう|major (field of study)|n|people|
家族|かぞく|family|n|people|
父|ちち|(my) father|n|people|Use for your own father. お父さん for someone else's.
お父さん|おとうさん|father (someone's / calling your dad)|n|people|
母|はは|(my) mother|n|people|Use for your own mother. お母さん for someone else's.
お母さん|おかあさん|mother (someone's / calling your mom)|n|people|
兄|あに|(my) older brother|n|people|
お兄さん|おにいさん|older brother (someone's)|n|people|
姉|あね|(my) older sister|n|people|
お姉さん|おねえさん|older sister (someone's)|n|people|
弟|おとうと|younger brother|n|people|
妹|いもうと|younger sister|n|people|
兄弟|きょうだい|siblings|n|people|
両親|りょうしん|parents|n|people|
祖父|そふ|(my) grandfather|n|people|
|おじいさん|grandfather / old man|n|people|
祖母|そぼ|(my) grandmother|n|people|
|おばあさん|grandmother / old woman|n|people|
夫|おっと|(my) husband|n|people|
妻|つま|(my) wife|n|people|
奥さん|おくさん|wife (someone's)|n|people|
皆さん|みなさん|everyone (polite)|n|people|
|みんな|everyone / all|n|people|
学校|がっこう|school|n|school|
大学|だいがく|college / university|n|school|
高校|こうこう|high school|n|school|
教室|きょうしつ|classroom|n|school|
授業|じゅぎょう|class / lesson|n|school|
宿題|しゅくだい|homework|n|school|
試験|しけん|exam|n|school|
|テスト|test / quiz|n|school|
|クラス|class (group of students)|n|school|
本|ほん|book|n|school|
辞書|じしょ|dictionary|n|school|
教科書|きょうかしょ|textbook|n|school|
|ノート|notebook|n|school|
鉛筆|えんぴつ|pencil|n|school|
|ペン|pen|n|school|
紙|かみ|paper|n|school|
日本語|にほんご|Japanese (language)|n|school|
英語|えいご|English (language)|n|school|
言葉|ことば|word / language|n|school|
漢字|かんじ|kanji|n|school|
|ひらがな|hiragana|n|school|
|カタカナ|katakana|n|school|
文法|ぶんぽう|grammar|n|school|
意味|いみ|meaning|n|school|
質問|しつもん|question|n|school|
問題|もんだい|problem / question (on a test)|n|school|
答え|こたえ|answer|n|school|
図書館|としょかん|library|n|school|
勉強|べんきょう|study / studying|n|school|
今|いま|now|n|time|
今日|きょう|today|n|time|
明日|あした|tomorrow|n|time|
昨日|きのう|yesterday|n|time|
毎日|まいにち|every day|n|time|
毎朝|まいあさ|every morning|n|time|
毎晩|まいばん|every night|n|time|
毎週|まいしゅう|every week|n|time|
朝|あさ|morning|n|time|
昼|ひる|noon / daytime|n|time|
晩|ばん|evening|n|time|
夜|よる|night|n|time|
午前|ごぜん|A.M. / morning|n|time|
午後|ごご|P.M. / afternoon|n|time|
今朝|けさ|this morning|n|time|
今晩|こんばん|tonight / this evening|n|time|
週|しゅう|week|n|time|
今週|こんしゅう|this week|n|time|
来週|らいしゅう|next week|n|time|
先週|せんしゅう|last week|n|time|
週末|しゅうまつ|weekend|n|time|
今月|こんげつ|this month|n|time|
来月|らいげつ|next month|n|time|
先月|せんげつ|last month|n|time|
年|とし|year / age|n|time|
今年|ことし|this year|n|time|
来年|らいねん|next year|n|time|
去年|きょねん|last year|n|time|
時間|じかん|time / hours|n|time|
時|とき|when, at the time of|n|time|子供の時 = when I was a child.
休み|やすみ|holiday / day off / break|n|time|
誕生日|たんじょうび|birthday|n|time|
日曜日|にちようび|Sunday|n|time|
月曜日|げつようび|Monday|n|time|
火曜日|かようび|Tuesday|n|time|
水曜日|すいようび|Wednesday|n|time|
木曜日|もくようび|Thursday|n|time|
金曜日|きんようび|Friday|n|time|
土曜日|どようび|Saturday|n|time|
〜時|〜じ|o'clock|ctr|time|
四時|よじ|4 o'clock|n|time|Not よんじ.
七時|しちじ|7 o'clock|n|time|Not ななじ.
九時|くじ|9 o'clock|n|time|Not きゅうじ.
〜時間|〜じかん|hours (how long)|ctr|time|二時間 = for two hours.
〜分|〜ふん / 〜ぷん|minute(s)|ctr|time|五分 ごふん, 十分 じゅっぷん, 一分 いっぷん.
半|はん|half past|n|time|三時半 = 3:30.
零|れい / ゼロ|zero|num|numbers|In phone numbers people usually say ゼロ.
一|いち|one|num|numbers|
二|に|two|num|numbers|
三|さん|three|num|numbers|
四|よん / し|four|num|numbers|し sounds like 死 (death), so よん is preferred.
五|ご|five|num|numbers|
六|ろく|six|num|numbers|
七|なな / しち|seven|num|numbers|
八|はち|eight|num|numbers|
九|きゅう / く|nine|num|numbers|く sounds like 苦 (suffering), so きゅう is preferred.
十|じゅう|ten|num|numbers|
百|ひゃく|hundred|num|numbers|
三百|さんびゃく|three hundred|num|numbers|Sound change: びゃく.
六百|ろっぴゃく|six hundred|num|numbers|Sound change: っぴゃく.
八百|はっぴゃく|eight hundred|num|numbers|Sound change: っぴゃく.
千|せん|thousand|num|numbers|
三千|さんぜん|three thousand|num|numbers|Sound change: ぜん.
八千|はっせん|eight thousand|num|numbers|
万|まん|ten thousand|num|numbers|Japanese counts big numbers in 10,000s. 一万円 = ¥10,000.
一つ|ひとつ|one (thing)|ctr|numbers|The general counter, good for most objects.
二つ|ふたつ|two (things)|ctr|numbers|
三つ|みっつ|three (things)|ctr|numbers|
四つ|よっつ|four (things)|ctr|numbers|
五つ|いつつ|five (things)|ctr|numbers|
一人|ひとり|one person / alone|ctr|numbers|
二人|ふたり|two people|ctr|numbers|
〜人|〜にん|people (counter, 3 and up)|ctr|numbers|三人 さんにん.
〜円|〜えん|yen|ctr|numbers|
〜歳|〜さい|years old|ctr|numbers|二十歳 is はたち.
〜枚|〜まい|flat things (paper, shirts, tickets)|ctr|numbers|
〜本|〜ほん|long things (pens, bottles, umbrellas)|ctr|numbers|一本 いっぽん, 三本 さんぼん.
〜回|〜かい|times (how often)|ctr|numbers|
食べ物|たべもの|food|n|food|
飲み物|のみもの|drink / beverage|n|food|
ご飯|ごはん|rice / meal|n|food|
朝ご飯|あさごはん|breakfast|n|food|
昼ご飯|ひるごはん|lunch|n|food|
晩ご飯|ばんごはん|dinner|n|food|
水|みず|water|n|food|At restaurants, ask for お水.
お茶|おちゃ|green tea / tea|n|food|
紅茶|こうちゃ|black tea|n|food|
|コーヒー|coffee|n|food|
牛乳|ぎゅうにゅう|milk|n|food|
お酒|おさけ|alcohol / sake|n|food|
|ビール|beer|n|food|
肉|にく|meat|n|food|
牛肉|ぎゅうにく|beef|n|food|
豚肉|ぶたにく|pork|n|food|
鶏肉|とりにく|chicken (meat)|n|food|
魚|さかな|fish|n|food|
野菜|やさい|vegetable|n|food|
果物|くだもの|fruit|n|food|
卵|たまご|egg|n|food|
|パン|bread|n|food|From Portuguese. This is the normal word.
お菓子|おかし|sweets / snacks|n|food|
|りんご|apple|n|food|
|みかん|mandarin orange|n|food|
|すし|sushi|n|food|
料理|りょうり|cooking / dish / cuisine|n|food|
お弁当|おべんとう|boxed lunch|n|food|
味|あじ|taste / flavor|n|food|
塩|しお|salt|n|food|
砂糖|さとう|sugar|n|food|
箸|はし|chopsticks|n|food|
皿|さら|plate / dish|n|food|
|ハンバーガー|hamburger|n|food|
|アイスクリーム|ice cream|n|food|
|レストラン|restaurant|n|food|
喫茶店|きっさてん|café / coffee shop|n|food|
家|いえ|house / home|n|places|
|うち|home / my house|n|places|Warmer than 家. うちに帰る = go home.
部屋|へや|room|n|places|
台所|だいどころ|kitchen|n|places|
お手洗い|おてあらい|restroom (polite)|n|places|
|トイレ|toilet / restroom|n|places|
町|まち|town / city|n|places|
駅|えき|station|n|places|
銀行|ぎんこう|bank|n|places|
郵便局|ゆうびんきょく|post office|n|places|
病院|びょういん|hospital|n|places|
店|みせ|store / shop|n|places|Polite: お店.
本屋|ほんや|bookstore|n|places|
公園|こうえん|park|n|places|
会社|かいしゃ|company|n|places|
国|くに|country|n|places|
所|ところ|place|n|places|
映画館|えいがかん|movie theater|n|places|
空港|くうこう|airport|n|places|
お寺|おてら|(Buddhist) temple|n|places|
神社|じんじゃ|(Shinto) shrine|n|places|
建物|たてもの|building|n|places|
入口|いりぐち|entrance|n|places|
出口|でぐち|exit|n|places|
|ホテル|hotel|n|places|
|コンビニ|convenience store|n|places|
|スーパー|supermarket|n|places|
|デパート|department store|n|places|
日本|にほん|Japan|n|places|
外国|がいこく|foreign country|n|places|
中国|ちゅうごく|China|n|places|
韓国|かんこく|South Korea|n|places|
|アメリカ|America / USA|n|places|
|イギリス|Britain / UK|n|places|
上|うえ|on / above|n|position|机の上 = on the desk.
下|した|under / below|n|position|
前|まえ|in front of / before|n|position|
後ろ|うしろ|behind|n|position|
中|なか|inside|n|position|
外|そと|outside|n|position|
隣|となり|next to (side by side)|n|position|
横|よこ|beside / next to|n|position|
間|あいだ|between|n|position|AとBの間.
近く|ちかく|nearby / near|n|position|
右|みぎ|right|n|position|
左|ひだり|left|n|position|
|ここ|here|pron|position|
|そこ|there (near you)|pron|position|
|あそこ|over there|pron|position|
|どこ|where|q|position|
|これ|this (thing)|pron|position|
|それ|that (near you)|pron|position|
|あれ|that (over there)|pron|position|
|どれ|which one (of three or more)|q|position|
東|ひがし|east|n|position|
西|にし|west|n|position|
南|みなみ|south|n|position|
北|きた|north|n|position|
机|つくえ|desk|n|home|
椅子|いす|chair|n|home|
|テーブル|table|n|home|
窓|まど|window|n|home|
|ドア|door|n|home|
|ベッド|bed|n|home|
電気|でんき|light / electricity|n|home|Turn on the light = 電気をつける.
電話|でんわ|telephone|n|home|
|スマホ|smartphone|n|home|
|テレビ|TV|n|home|
|パソコン|computer (PC)|n|home|
写真|しゃしん|photo|n|home|
手紙|てがみ|letter|n|home|
財布|さいふ|wallet|n|home|
傘|かさ|umbrella|n|home|
鞄|かばん|bag|n|home|
時計|とけい|watch / clock|n|home|
帽子|ぼうし|hat / cap|n|home|
服|ふく|clothes|n|home|
靴|くつ|shoes|n|home|
|シャツ|shirt|n|home|
眼鏡|めがね|glasses|n|home|
鍵|かぎ|key / lock|n|home|
お金|おかね|money|n|home|
物|もの|thing (physical)|n|home|
|こと|thing (abstract), matter|n|home|
荷物|にもつ|luggage / package|n|home|
新聞|しんぶん|newspaper|n|home|
雑誌|ざっし|magazine|n|home|
切手|きって|postage stamp|n|home|
音楽|おんがく|music|n|hobbies|
歌|うた|song|n|hobbies|
映画|えいが|movie|n|hobbies|
絵|え|picture / painting|n|hobbies|
趣味|しゅみ|hobby|n|hobbies|
|スポーツ|sports|n|hobbies|
|テニス|tennis|n|hobbies|
|サッカー|soccer / football|n|hobbies|
水泳|すいえい|swimming|n|hobbies|
旅行|りょこう|travel / trip|n|hobbies|
買い物|かいもの|shopping|n|hobbies|
散歩|さんぽ|walk / stroll|n|hobbies|
|ゲーム|game / video game|n|hobbies|
|パーティー|party|n|hobbies|
|アルバイト|part-time job|n|hobbies|Usually shortened to バイト. From German.
|デート|date (romantic)|n|hobbies|
|コンサート|concert|n|hobbies|
天気|てんき|weather|n|nature|
雨|あめ|rain|n|nature|
雪|ゆき|snow|n|nature|
晴れ|はれ|sunny weather|n|nature|
空|そら|sky|n|nature|
風|かぜ|wind|n|nature|
海|うみ|sea / ocean / beach|n|nature|
山|やま|mountain|n|nature|
川|かわ|river|n|nature|
木|き|tree|n|nature|
花|はな|flower|n|nature|
犬|いぬ|dog|n|nature|
猫|ねこ|cat|n|nature|
鳥|とり|bird|n|nature|
動物|どうぶつ|animal|n|nature|
月|つき|moon|n|nature|
春|はる|spring|n|nature|
夏|なつ|summer|n|nature|
秋|あき|autumn / fall|n|nature|
冬|ふゆ|winter|n|nature|
色|いろ|color|n|colors|
赤|あか|red (noun)|n|colors|
赤い|あかい|red|adj-i|colors|
青|あお|blue (noun)|n|colors|
青い|あおい|blue|adj-i|colors|Traditionally also covers green, like a green traffic light (青信号).
白|しろ|white (noun)|n|colors|
白い|しろい|white|adj-i|colors|
黒|くろ|black (noun)|n|colors|
黒い|くろい|black|adj-i|colors|
黄色い|きいろい|yellow|adj-i|colors|
茶色い|ちゃいろい|brown|adj-i|colors|
緑|みどり|green|n|colors|No い-adjective form. Say 緑の.
体|からだ|body|n|body|
頭|あたま|head|n|body|頭がいい = smart.
顔|かお|face|n|body|
目|め|eye|n|body|
耳|みみ|ear|n|body|
口|くち|mouth|n|body|
鼻|はな|nose|n|body|
歯|は|tooth|n|body|
手|て|hand|n|body|
足|あし|foot / leg|n|body|
お腹|おなか|stomach / belly|n|body|
髪|かみ|hair|n|body|
背|せ|height (how tall)|n|body|背が高い = tall.
病気|びょうき|illness / sick|n|body|
風邪|かぜ|a cold|n|body|風邪をひく = catch a cold.
薬|くすり|medicine|n|body|薬を飲む = take medicine.
電車|でんしゃ|train|n|travel|
地下鉄|ちかてつ|subway|n|travel|
新幹線|しんかんせん|bullet train|n|travel|
|バス|bus|n|travel|
|タクシー|taxi|n|travel|
飛行機|ひこうき|airplane|n|travel|
船|ふね|ship / boat|n|travel|
車|くるま|car|n|travel|
自転車|じてんしゃ|bicycle|n|travel|
切符|きっぷ|ticket (train, bus)|n|travel|
地図|ちず|map|n|travel|
道|みち|road / way|n|travel|
店員|てんいん|store clerk|n|travel|
行く|いく|to go|v5|verbs|Te-form is the exception いって.
来る|くる|to come|vk|verbs|
帰る|かえる|to go home / return|v5|verbs|
する|する|to do|vs|verbs|
見る|みる|to see / watch / look|v1|verbs|
食べる|たべる|to eat|v1|verbs|
飲む|のむ|to drink|v5|verbs|Also: take medicine (薬を飲む).
聞く|きく|to listen / to ask|v5|verbs|
読む|よむ|to read|v5|verbs|
書く|かく|to write|v5|verbs|
話す|はなす|to speak / talk|v5|verbs|
会う|あう|to meet|v5|verbs|Uses に: 友達に会う.
ある|ある|there is / to have (things)|v5|verbs|For objects. Negative is just ない.
いる|いる|there is / to be (people, animals)|v1|verbs|For living things.
買う|かう|to buy|v5|verbs|
撮る|とる|to take (a photo)|v5|verbs|
取る|とる|to take / pick up|v5|verbs|
待つ|まつ|to wait|v5|verbs|
分かる|わかる|to understand|v5|verbs|Uses が: 日本語が分かる.
起きる|おきる|to get up / wake up|v1|verbs|
寝る|ねる|to sleep / go to bed|v1|verbs|
遊ぶ|あそぶ|to play / hang out|v5|verbs|For having fun, not sports or instruments.
急ぐ|いそぐ|to hurry|v5|verbs|
泳ぐ|およぐ|to swim|v5|verbs|
返す|かえす|to return (a thing)|v5|verbs|
消す|けす|to turn off / erase|v5|verbs|
死ぬ|しぬ|to die|v5|verbs|
座る|すわる|to sit down|v5|verbs|
立つ|たつ|to stand up|v5|verbs|
使う|つかう|to use|v5|verbs|
手伝う|てつだう|to help (with a task)|v5|verbs|
助ける|たすける|to help / rescue|v1|verbs|助けて! = Help!
入る|はいる|to enter / go in|v5|verbs|Uses に: 部屋に入る. Also: take a bath (お風呂に入る).
出る|でる|to exit / leave / attend|v1|verbs|
持つ|もつ|to hold / carry / have|v5|verbs|
休む|やすむ|to rest / be absent|v5|verbs|
歌う|うたう|to sing|v5|verbs|
作る|つくる|to make|v5|verbs|
洗う|あらう|to wash|v5|verbs|
言う|いう|to say|v5|verbs|
思う|おもう|to think|v5|verbs|
知る|しる|to know (get to know)|v5|verbs|"I know" is 知っています. "I don't know" is 知りません.
住む|すむ|to live (reside)|v5|verbs|Uses に: 東京に住んでいます.
働く|はたらく|to work|v5|verbs|
乗る|のる|to ride / get on|v5|verbs|Uses に: 電車に乗る.
降りる|おりる|to get off|v1|verbs|Uses を: 電車を降りる.
始まる|はじまる|to begin (something begins)|v5|verbs|授業が始まる = class starts.
始める|はじめる|to begin (start something)|v1|verbs|勉強を始める = start studying.
終わる|おわる|to end / finish|v5|verbs|
走る|はしる|to run|v5|verbs|
歩く|あるく|to walk|v5|verbs|
置く|おく|to put / place|v5|verbs|
着く|つく|to arrive|v5|verbs|Uses に: 駅に着く.
送る|おくる|to send|v5|verbs|
払う|はらう|to pay|v5|verbs|
呼ぶ|よぶ|to call (someone over)|v5|verbs|
貸す|かす|to lend|v5|verbs|
借りる|かりる|to borrow|v1|verbs|
出す|だす|to take out / hand in|v5|verbs|宿題を出す = hand in homework.
習う|ならう|to learn (from someone)|v5|verbs|
弾く|ひく|to play (piano, guitar)|v5|verbs|
降る|ふる|to fall (rain, snow)|v5|verbs|雨が降る = it rains.
登る|のぼる|to climb|v5|verbs|
曲がる|まがる|to turn (a corner)|v5|verbs|右に曲がる = turn right.
止まる|とまる|to stop (come to a stop)|v5|verbs|
泊まる|とまる|to stay (at a hotel)|v5|verbs|
困る|こまる|to be in trouble / be stuck|v5|verbs|
切る|きる|to cut|v5|verbs|
脱ぐ|ぬぐ|to take off (clothes, shoes)|v5|verbs|
楽しむ|たのしむ|to enjoy|v5|verbs|
もらう|もらう|to receive / get|v5|verbs|
選ぶ|えらぶ|to choose|v5|verbs|
頑張る|がんばる|to do one's best / try hard|v5|verbs|
要る|いる|to need|v5|verbs|Different from いる (to exist). This one is an う-verb: いります.
開ける|あける|to open (something)|v1|verbs|
閉める|しめる|to close (something)|v1|verbs|
教える|おしえる|to teach / tell|v1|verbs|
忘れる|わすれる|to forget|v1|verbs|
覚える|おぼえる|to memorize / remember|v1|verbs|
着る|きる|to wear (shirts, jackets)|v1|verbs|For clothes from the waist up. Pants and shoes use はく.
|はく|to wear (pants, shoes)|v5|verbs|
浴びる|あびる|to take (a shower)|v1|verbs|シャワーを浴びる.
出かける|でかける|to go out|v1|verbs|
疲れる|つかれる|to get tired|v1|verbs|"I'm tired" is 疲れました.
見せる|みせる|to show|v1|verbs|
|つける|to turn on|v1|verbs|電気をつける = turn on the light.
捨てる|すてる|to throw away|v1|verbs|
答える|こたえる|to answer|v1|verbs|
生まれる|うまれる|to be born|v1|verbs|
|やめる|to quit / stop doing|v1|verbs|
|できる|can do / be able to|v1|verbs|
遅れる|おくれる|to be late|v1|verbs|Uses に: 授業に遅れる.
調べる|しらべる|to look up / check|v1|verbs|
考える|かんがえる|to think about / consider|v1|verbs|
入れる|いれる|to put in|v1|verbs|
分ける|わける|to divide / share out|v1|verbs|
決める|きめる|to decide|v1|verbs|
|あげる|to give|v1|verbs|
|くれる|to give (to me)|v1|verbs|
手に入れる|てにいれる|to get / obtain|v1|verbs|
勉強する|べんきょうする|to study|vs|verbs|
電話する|でんわする|to call (on the phone)|vs|verbs|
料理する|りょうりする|to cook|vs|verbs|
掃除する|そうじする|to clean|vs|verbs|
洗濯する|せんたくする|to do laundry|vs|verbs|
運動する|うんどうする|to exercise|vs|verbs|
結婚する|けっこんする|to get married|vs|verbs|
散歩する|さんぽする|to take a walk|vs|verbs|
旅行する|りょこうする|to travel|vs|verbs|
練習する|れんしゅうする|to practice|vs|verbs|
運転する|うんてんする|to drive|vs|verbs|
質問する|しつもんする|to ask a question|vs|verbs|
説明する|せつめいする|to explain|vs|verbs|
予約する|よやくする|to make a reservation|vs|verbs|
心配する|しんぱいする|to worry|vs|verbs|
確認する|かくにんする|to check / confirm|vs|verbs|
紹介する|しょうかいする|to introduce|vs|verbs|
準備する|じゅんびする|to prepare|vs|verbs|
買い物する|かいものする|to shop|vs|verbs|
大きい|おおきい|big|adj-i|adj|
小さい|ちいさい|small|adj-i|adj|
新しい|あたらしい|new|adj-i|adj|
古い|ふるい|old (things)|adj-i|adj|Not for people. For older people, say 年上 or お年寄り.
暑い|あつい|hot (weather)|adj-i|adj|
熱い|あつい|hot (to the touch)|adj-i|adj|
寒い|さむい|cold (weather)|adj-i|adj|
冷たい|つめたい|cold (to the touch)|adj-i|adj|
涼しい|すずしい|cool (weather)|adj-i|adj|
暖かい|あたたかい|warm|adj-i|adj|
難しい|むずかしい|difficult|adj-i|adj|
易しい|やさしい|easy (questions, tests)|adj-i|adj|
優しい|やさしい|kind / gentle|adj-i|adj|
高い|たかい|expensive / tall / high|adj-i|adj|
安い|やすい|cheap|adj-i|adj|
低い|ひくい|low / short (height)|adj-i|adj|
面白い|おもしろい|interesting / funny|adj-i|adj|
|つまらない|boring|adj-i|adj|
|いい|good|adj-i|adj|Irregular: よくない, よかった.
悪い|わるい|bad|adj-i|adj|
忙しい|いそがしい|busy|adj-i|adj|
楽しい|たのしい|fun|adj-i|adj|
嬉しい|うれしい|happy / glad|adj-i|adj|For a happy moment. 幸せ is long-term happiness.
悲しい|かなしい|sad|adj-i|adj|
怖い|こわい|scary / afraid|adj-i|adj|
|おいしい|delicious|adj-i|adj|
|まずい|tastes bad|adj-i|adj|
|かわいい|cute|adj-i|adj|
|かっこいい|cool / good-looking|adj-i|adj|Conjugates like いい: かっこよくない.
|すごい|amazing / great|adj-i|adj|
若い|わかい|young|adj-i|adj|
長い|ながい|long|adj-i|adj|
短い|みじかい|short (length)|adj-i|adj|
早い|はやい|early|adj-i|adj|
速い|はやい|fast|adj-i|adj|
遅い|おそい|slow / late|adj-i|adj|
近い|ちかい|near / close|adj-i|adj|
遠い|とおい|far|adj-i|adj|
多い|おおい|many / a lot|adj-i|adj|Not used right before a noun. Say たくさんの人, not 多い人.
少ない|すくない|few / little|adj-i|adj|
強い|つよい|strong|adj-i|adj|
弱い|よわい|weak|adj-i|adj|
重い|おもい|heavy|adj-i|adj|
軽い|かるい|light (weight)|adj-i|adj|
明るい|あかるい|bright / cheerful|adj-i|adj|
暗い|くらい|dark / gloomy|adj-i|adj|
広い|ひろい|wide / spacious|adj-i|adj|
狭い|せまい|narrow / small (room)|adj-i|adj|
痛い|いたい|painful / it hurts|adj-i|adj|頭が痛い = I have a headache.
甘い|あまい|sweet|adj-i|adj|
辛い|からい|spicy (hot)|adj-i|adj|
眠い|ねむい|sleepy|adj-i|adj|
汚い|きたない|dirty|adj-i|adj|
危ない|あぶない|dangerous|adj-i|adj|
欲しい|ほしい|to want (a thing)|adj-i|adj|Thing + が + 欲しい.
恥ずかしい|はずかしい|embarrassed / shy|adj-i|adj|
寂しい|さびしい|lonely|adj-i|adj|
好き|すき|to like / favorite|adj-na|adj|Uses が: 猫が好きです.
大好き|だいすき|to love / really like|adj-na|adj|The everyday way to say you love something.
嫌い|きらい|to dislike|adj-na|adj|
元気|げんき|healthy / energetic / fine|adj-na|adj|
静か|しずか|quiet|adj-na|adj|
賑やか|にぎやか|lively / busy (place)|adj-na|adj|
|きれい|pretty / clean|adj-na|adj|
有名|ゆうめい|famous|adj-na|adj|
親切|しんせつ|kind (to others)|adj-na|adj|
暇|ひま|free (not busy)|adj-na|adj|
大変|たいへん|tough / hard / terrible|adj-na|adj|
便利|べんり|convenient|adj-na|adj|
不便|ふべん|inconvenient|adj-na|adj|
上手|じょうず|good at / skilled|adj-na|adj|Used for other people. For yourself, say 得意.
下手|へた|bad at / unskilled|adj-na|adj|
得意|とくい|good at (one's strong point)|adj-na|adj|
苦手|にがて|weak at / not good with|adj-na|adj|
簡単|かんたん|easy / simple|adj-na|adj|
大丈夫|だいじょうぶ|okay / all right|adj-na|adj|
大切|たいせつ|important / precious|adj-na|adj|
大事|だいじ|important|adj-na|adj|
残念|ざんねん|too bad / disappointing|adj-na|adj|
幸せ|しあわせ|happy (life)|adj-na|adj|
真面目|まじめ|serious / hardworking|adj-na|adj|
素敵|すてき|lovely / wonderful|adj-na|adj|
|いろいろ|various|adj-na|adj|
|ハンサム|handsome|adj-na|adj|
必要|ひつよう|necessary|adj-na|adj|
無理|むり|impossible / too much|adj-na|adj|
|とても|very|adv|adverbs|
少し|すこし|a little|adv|adverbs|
|ちょっと|a little / a bit|adv|adverbs|
|たくさん|a lot / many|adv|adverbs|
|よく|often / well|adv|adverbs|
時々|ときどき|sometimes|adv|adverbs|
|いつも|always|adv|adverbs|
|あまり|not very (with negative)|adv|adverbs|あまり好きじゃないです = I don't like it much.
全然|ぜんぜん|not at all (with negative)|adv|adverbs|
|もう|already / anymore|adv|adverbs|
|まだ|still / not yet|adv|adverbs|
|すぐ|right away / soon|adv|adverbs|
|また|again|adv|adverbs|
一緒に|いっしょに|together|adv|adverbs|
一人で|ひとりで|alone / by oneself|adv|adverbs|
本当に|ほんとうに|really|adv|adverbs|
|たぶん|probably / maybe|adv|adverbs|
|だいたい|mostly / about|adv|adverbs|
|ゆっくり|slowly|adv|adverbs|
早く|はやく|early / quickly|adv|adverbs|
初めて|はじめて|for the first time|adv|adverbs|
全部|ぜんぶ|all / everything|adv|adverbs|
一番|いちばん|the most / number one|adv|adverbs|
|もっと|more|adv|adverbs|
|きっと|surely|adv|adverbs|
|ずっと|all the time / by far|adv|adverbs|
後で|あとで|later|adv|adverbs|
例えば|たとえば|for example|adv|adverbs|
|でも|but|conj|adverbs|
|そして|and (then)|conj|adverbs|
|それから|and then / after that|conj|adverbs|
|だから|so / therefore|conj|adverbs|
|〜から|because|conj|adverbs|
何|なに / なん|what|q|questions|なん before で, の, です and counters.
誰|だれ|who|q|questions|
|いつ|when|q|questions|
|どう|how|q|questions|
|どうして|why|q|questions|
|どんな|what kind of|q|questions|
|どの|which (+ noun)|q|questions|
|どっち|which (of two)|q|questions|
|いくら|how much (price)|q|questions|
|いくつ|how many / how old|q|questions|
何時|なんじ|what time|q|questions|
何人|なんにん|how many people|q|questions|
何曜日|なんようび|what day of the week|q|questions|
`;

// Katakana traps. Format: loanword|english|preferred (kanji:kana, comma separated)|verdict|note
// verdict: avoid = sounds odd in daily life; context = both used, depends on the situation
const TRAPS = `
ミルク|milk|牛乳:ぎゅうにゅう|context|ミルク is milk for coffee or babies. Cartons, school lunches and the fridge say 牛乳.
ライス|rice|ご飯:ごはん|avoid|ライス only shows up on Western-style menus (カレーライス). At home it's ご飯.
ドリンク|drink|飲み物:のみもの|context|ドリンク appears on menus (ドリンクバー). In conversation say 飲み物.
フード|food|食べ物:たべもの|avoid|
ウォーター|water|水:みず|avoid|Ask for お水 at a restaurant.
ルーム|room|部屋:へや|avoid|ルーム only appears in names like ルームサービス.
ハウス|house|家:いえ,うち:うち|avoid|
キッチン|kitchen|台所:だいどころ|context|Both are used. Apartment ads say キッチン; 台所 is the classic word.
フレンド|friend|友達:ともだち|avoid|
ファミリー|family|家族:かぞく|avoid|Only in names like ファミリーレストラン.
ワイフ|wife|妻:つま,奥さん:おくさん|avoid|妻 for your own wife, 奥さん for someone else's.
ハズバンド|husband|夫:おっと|avoid|
ブック|book|本:ほん|avoid|
ショップ|shop / store|店:みせ|context|ショップ appears in store names. Say 店 or お店.
ストア|store|店:みせ|avoid|
スクール|school|学校:がっこう|context|Only for private lessons (英会話スクール). Regular school is 学校.
ティーチャー|teacher|先生:せんせい|avoid|
スチューデント|student|学生:がくせい|avoid|
ネーム|name|名前:なまえ|avoid|
ジョブ|job|仕事:しごと|avoid|
ワーク|work|仕事:しごと,働く:はたらく|avoid|
モーニング|morning|朝:あさ|context|At cafés, モーニング means a breakfast set. The time of day is 朝.
ナイト|night|夜:よる|avoid|
デイ|day|日:ひ|avoid|
ウィーク|week|週:しゅう|avoid|
タイム|time|時間:じかん|avoid|
アニマル|animal|動物:どうぶつ|avoid|
ドッグ|dog|犬:いぬ|avoid|
キャット|cat|猫:ねこ|avoid|
フラワー|flower|花:はな|avoid|
マウンテン|mountain|山:やま|avoid|
リバー|river|川:かわ|avoid|
スカイ|sky|空:そら|avoid|
レイン|rain|雨:あめ|avoid|
スノー|snow|雪:ゆき|context|Only in compounds like スノーボード.
カラー|color|色:いろ|context|カラー is used for hair color and color printing. Otherwise 色.
カー|car|車:くるま|avoid|
マネー|money|お金:おかね|avoid|
ホーム|home|家:いえ,うち:うち|avoid|ホーム usually means a train platform.
ライト|light|電気:でんき|context|Turn on the light = 電気をつける. ライト is for flashlights and headlights.
ビッグ|big|大きい:おおきい|avoid|
スモール|small|小さい:ちいさい|avoid|
ホット|hot|暑い:あつい,熱い:あつい|context|At cafés ホット means a hot drink (ホットコーヒー). Hot weather is 暑い.
クール|cool|涼しい:すずしい,かっこいい:かっこいい|avoid|Cool weather is 涼しい. Cool as in stylish is かっこいい.
ナイス|nice|いい:いい|avoid|ナイス is sports slang (ナイスショット!).
ハッピー|happy|嬉しい:うれしい,幸せ:しあわせ|avoid|
ラッキー|lucky|運がいい:うんがいい|context|ラッキー! is fine as a casual exclamation.
ビューティフル|beautiful|きれい:きれい,美しい:うつくしい|avoid|
ラブ|love|大好き:だいすき|avoid|For things and people you love, say 大好き. 愛 is very heavy.
ベリー|very|とても:とても|avoid|
オーケー|okay|大丈夫:だいじょうぶ,いいです:いいです|context|OK is understood, but 大丈夫です sounds natural.
サンキュー|thank you|ありがとう:ありがとう|avoid|
バイバイ|bye|じゃあね:じゃあね,さようなら:さようなら|context|バイバイ is fine with friends and kids.
イエス|yes|はい:はい|avoid|
ノー|no|いいえ:いいえ|avoid|
スタート|start|始める:はじめる,始まる:はじまる|context|スタート is used in sports and events. Starting something is 始める.
ストップ|stop|止まる:とまる,やめる:やめる|context|Stopping a car is 止まる. Quitting a habit is やめる.
ヘルプ|help|手伝う:てつだう,助ける:たすける|avoid|Help with a task is 手伝う. In an emergency shout 助けて!
チェック|check|確認する:かくにんする,調べる:しらべる|context|チェック is common at work. 確認する sounds better.
トライ|try|やってみる:やってみる|avoid|
エンジョイ|enjoy|楽しむ:たのしむ|avoid|
ゲット|get|手に入れる:てにいれる,もらう:もらう|context|ゲット is slang. Fine with friends.
シェア|share|分ける:わける|context|シェア is used for sharing posts or rooms. Splitting food is 分ける.
スピーク|speak|話す:はなす|avoid|
トーク|talk|話す:はなす|avoid|
アイデア|idea|考え:かんがえ|context|Both are common.
ミーティング|meeting|会議:かいぎ|context|Offices use both.
チケット|ticket|切符:きっぷ|context|Train tickets are 切符. Concert tickets are チケット.
ファースト|first|初めて:はじめて,最初:さいしょ|avoid|
ラスト|last|最後:さいご|context|ラスト is casual.
サイクル|bicycle|自転車:じてんしゃ|avoid|
`;
