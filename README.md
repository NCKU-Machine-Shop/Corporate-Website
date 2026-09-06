# [公司名稱] 官方網站

公司形象網站，純靜態 HTML/CSS/JS（無框架、無建置流程），繁體中文（預設）＋ 英文雙語，各語言為獨立頁面（`en/` 目錄）。

## 狀態

- [x] 版型 / 頁面結構
- [ ] 正式品牌 CIS（Logo、配色）— 待提供，屆時只需更新 `assets/css/tokens.css` 與 logo 素材，無需改動頁面 HTML
- [ ] 正式中英文內容 — 目前為佔位文字（以 `[ ]` 標示）
- [ ] GitHub Pages 部署 — 待有 GitHub 帳號 / remote 後另行處理
- [x] `LICENSE` — All Rights Reserved

## 結構

```
index.html / about.html / projects.html / rd.html / contact.html   繁體中文頁面
en/                                                                  英文頁面（同名對應）
assets/css/tokens.css                                                品牌變數（顏色、字型、Logo 佔位）
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
