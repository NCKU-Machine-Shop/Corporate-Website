# mekWeb

國立成功大學－機械科技研發中心－精密儀器工程室網站。

## 技術與結構

- 純 HTML/CSS/JS，無框架、無建置流程。
- 中文：index.html、about.html、members.html、projects.html、research.html、rd.html、contact.html，以及 cases/ 下 22 個案例頁。
- rd.html 採錨點分區：核心技術、檢測服務、加工與檢測設備。
- en/ 保留各頁骨架；依使用者要求英文內容先留白，暫不開放中文頁面的 EN 連結。
- 共用 header/footer 直接複製於各頁；手機優先、navbar 可收合。

## 內容來源與已確認決策

- material/網站用.pptx：名稱、定位、沿革、使命、成員、聯絡方式、設備與檢測服務。
- material/交貨實績.pptx：21 個具名案例（第 2–22 頁）及精密加工實例（第 23 頁）。照片與名稱按同一投影片配對；不編造案例規格或成效。
- 聯絡資訊按網站用.pptx 第 6 頁原文，保留電話與分機寫法、Kevin 職稱、兩個信箱及三個據點。
- members.html 包含黃聖杰主任、賴思學營運指導教授，以及加工部 2 人、專案部 3 人；先使用無照片卡片，僅列已有職稱與專長。
- 成員資訊架構參考 https://nsap.me.ncku.edu.tw/members 的分組方式。
- material/ 中的獨立 JPG 不自行猜測專案對應。
- 全站 Logo 使用 material/精工室logo.pdf 匯出的 assets/img/logo.svg。
- 配色依成大識別系統 A-03 官方 RGB：紅 #A31F34、深灰 #555559、金 #8C6E4A、銀灰 #A6A9AB。用色方式參考 https://mtrdc.web2.ncku.edu.tw/，以紅色聯絡列與頁尾、白底及金色點綴呈現；共用色彩定義在 assets/css/tokens.css。
- 不確定的名稱、照片配對、翻譯或事實須提出，不自行補造。

## Git 與部署

- Remote：git@github.com:NCKU-Machine-Shop/Corporate-Website.git。
- 分階段 commit，保留網站逐步完成的歷史。
- GitHub Pages 部署暫緩，另行處理；已有 remote，不以缺少 remote 為理由。
- LICENSE 的版權人仍待明確確認，不能由顯示名稱推定。
- 待補項目見 placeholders.md。

## 版面與案例導覽

- 排版參考 https://www.aif.net.tw ：頁首聯絡列、主導覽、內頁標題與案例側欄。
- 中文主導覽的「研發經驗」使用按鈕展開下拉，含技術總覽、全部案例與 cases/ 下的獨立案例頁。
- 案例尚無正式分類，因此直接使用簡報名稱，不推定分類。手機點擊展開，鍵盤支援 Tab、向下鍵與 Escape。

- projects.html 為「客製項目」，先使用首頁「我們能做什麼」的服務介紹。
- research.html 為研發案例目錄；每個案例有獨立 URL、麵包屑、同案例完整照片、上一個／下一個案例。不得以錨點高亮取代案例頁。
- 案例頁呈現來源投影片全部照片（共 33 張），精密加工實例有 3 張；來源見 assets/img/projects/SOURCES.md。
