# Fahimeh Pouryani — Career Portfolio

A React + Vite portfolio site with interactive project demos, deployable to GitHub Pages.

---

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Step 1 — Create a GitHub repo

1. Go to https://github.com/new
2. Name it **`fahimeh-portfolio`** (or anything you like)
3. Set it to **Public**
4. Do NOT initialize with README — leave it empty
5. Click **Create repository**

---

### Step 2 — Update the repo name in vite.config.js

Open `vite.config.js` and change the `base` value to match your repo name:

```js
base: '/YOUR-REPO-NAME/',
```

For example, if your repo is `fahimeh-portfolio`:
```js
base: '/fahimeh-portfolio/',
```

---

### Step 3 — Push the code to GitHub

Open a terminal in this project folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/fahimeh-portfolio.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

---

### Step 4 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. That's it — the workflow will auto-run!

---

### Step 5 — Wait ~2 minutes, then visit your site

Your site will be live at:
```
https://YOUR-GITHUB-USERNAME.github.io/fahimeh-portfolio/
```

Every time you push to `main`, it auto-rebuilds and redeploys. ✅

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

---

## ✏️ Customizing Your Projects

Edit the `PROJECTS` array in `src/App.jsx`:

- **`title`** — Project name
- **`objective`** — What the project does
- **`audience`** — Who it's for
- **`resources`** — Tech stack tags
- **`educational`** — Links to learning resources (optional)
- **`github`** — Your GitHub repo link
- **`demoType`** — `"architecture"` | `"pipeline"` | `"lineage"` | `"genai"`
- **`demoData`** — Data that powers the interactive demo

---

## 🌐 Custom Domain (Optional)

If you own a domain like `fahimeh.dev`:

1. In GitHub repo → Settings → Pages → Custom domain → enter your domain
2. With your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`
