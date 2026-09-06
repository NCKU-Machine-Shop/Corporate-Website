# 網站 Placeholder 整理

依檔案分類列出目前所有待填內容（中文頁面 + 英文頁面 + CSS）。

## index.html / en/index.html
- `<title>` 與 meta description 中的 `[公司名稱]` / `[Company Name]`
- meta description 中的 `[一句話公司簡介]` / `[one-line company description]`
- navbar 品牌名稱 `<span class="brand-name">[公司名稱]</span>`
- 首頁大標題 `<h1>[公司名稱]</h1>`
- 首頁副標語 `[一句話說明公司提供的價值，例如：量身訂做的儀器研發與客製化製造專家]`
- 「客製案例」區塊簡述 `[簡述客製化專案的服務範圍]`
- 「研發經驗」區塊簡述 `[簡述研發經驗涵蓋的技術領域]`
- footer 版權 `&copy; 2026 [公司名稱]`

## about.html / en/about.html
- `<title>` 與 meta description 的 `[公司名稱]` / `[一句話公司簡介]`
- navbar 品牌名稱
- 公司沿革段落 `[公司沿革、成立年份、經營理念簡介]`
- 使命／願景段落 `[公司使命／願景說明]`
- 所在地／服務範圍段落 `[公司所在地／服務範圍]`
- footer 版權

## contact.html / en/contact.html
- `<title>` 與 meta description 的 `[公司名稱]` / `[一句話公司簡介]`
- navbar 品牌名稱
- 電話 `[電話號碼]`
- Email 顯示文字 `[電子郵件]`，且 `mailto:` 連結目前指向假的 `info@example.com`
- 地址／服務範圍 `[公司地址／服務範圍]`
- footer 版權

## projects.html / en/projects.html
- `<title>` 與 meta description 的 `[公司名稱]` / `[一句話公司簡介]`
- navbar 品牌名稱
- 四則案例卡片標題與簡述：`[案例標題 1~4]`、`[案例簡述 1~4]`
- footer 版權

## rd.html / en/rd.html
- `<title>` 與 meta description 的 `[公司名稱]` / `[一句話公司簡介]`
- navbar 品牌名稱
- 三個分類錨點連結文字 `[分類 1~3]`
- 三個分類區塊標題與說明 `[分類 1~3]`、`[分類 1~3 說明]`
- footer 版權

## assets/css/tokens.css
- 品牌色彩暫定值：`--color-primary`、`--color-secondary`、`--color-accent`（等 CIS 配色定案後替換）
- `--logo-image: none`，註解註明待有 logo 檔案後改為 `url("../img/logo.svg")`

---

**共通模式**：所有頁面的 `[公司名稱]` / `[一句話公司簡介]` / navbar 品牌名稱 / footer 版權都是同一組佔位字串，重複出現於每個頁面（中英各一份）。之後有正式公司名稱與 CIS 後，需要逐頁替換，或考慮改為共用 include（目前架構為純靜態、無模板引擎，故各頁各自複製）。
