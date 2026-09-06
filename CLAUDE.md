# mekWeb

公司形象網站，架構參考 [aif.net.tw](https://www.aif.net.tw/)（精密儀器研發公司站）。

## 技術
- 純 HTML/CSS/JS，無框架、無建置流程
- 透過 GitHub Pages 直接發布（main branch /root 或 /docs）

## 網站結構
- `index.html` — 首頁
- `about.html` — 關於我們
- `projects.html` — 客製案例
- `rd/` — 研發經驗分類（依領域拆頁或用錨點分區，待定）
- `contact.html` — 聯絡我們
- `en/` — 上述頁面的英文版（`en/index.html` 等，各語言獨立頁面）
- `assets/` — css / js / images

## 慣例
- 雙語：繁體中文（預設）＋ 英文，各語言各自獨立頁面（非同頁切換）
- RWD：手機優先，navbar 可收合
- 共用 header/footer 直接複製於各頁（無 SSR/模板引擎）
- 品牌配色/Logo 尚未定案（CIS 後續提供），先用 CSS variables 佔位，之後只改變數即可套用

## Git 工作流程（重要）
- Remote 已接上：`git@github.com:NCKU-Machine-Shop/Corporate-Website.git`
- Commit 歷史呈現「repo 建立 → 網站逐步完成」的過程（分階段 commit，不要一次全塞）
- LICENSE：採 All Rights Reserved，版權人暫以 `[公司名稱]` 佔位，定案後更新
- GitHub Pages 部署本身也先暫緩，待有帳號/remote 後另開一個 change 處理

## 待補資訊
- 公司名稱、Logo、CIS 配色
- 客製案例與研發分類的實際內容（中英文皆需）
