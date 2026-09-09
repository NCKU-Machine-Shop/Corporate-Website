# [公司名稱] 官方網站

公司形象網站，純靜態 HTML/CSS/JS（無框架、無建置流程），繁體中文（預設）＋ 英文雙語，各語言為獨立頁面（`en/` 目錄）。

## 狀態

- [x] 版型 / 頁面結構
- [x] Logo 與配色：使用精工室原始 Logo，配色依 [成大識別系統](https://web.ncku.edu.tw/p/412-1000-18098.php?Lang=zh-tw)，用色方式參考 [機械科技研發中心](https://mtrdc.web2.ncku.edu.tw/)
- [ ] 正式中英文內容 — 目前為佔位文字（以 `[ ]` 標示）
- [ ] GitHub Pages 部署 — 待有 GitHub 帳號 / remote 後另行處理
- [x] `LICENSE` — All Rights Reserved
- [x] SEO：各頁獨立 title／description、canonical、Open Graph、JSON-LD 結構化資料、`robots.txt`、`sitemap.xml`、`404.html`（網域 nckums.com.tw）

## 結構

```
index.html / about.html / projects.html / rd.html / contact.html   繁體中文頁面
en/                                                                  英文頁面（同名對應）
assets/css/tokens.css                                                品牌變數（成大標準色、字型）
assets/css/style.css                                                 版型與元件樣式
assets/js/nav.js                                                     手機版導覽選單收合
```

## 本地預覽

不需安裝任何工具，直接用瀏覽器開啟 `index.html` 即可；或用簡易伺服器：

```bash
python -m http.server 8000
```

## 授權

All Rights Reserved，詳見 [LICENSE](LICENSE)。
