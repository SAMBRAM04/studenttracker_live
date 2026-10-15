# Student Project Tracker (Vercel Ready)

A modern full-stack web application for tracking hardware and software engineering project ideas. Built with vanilla HTML/CSS/JavaScript, Express, and SQLite with automated schema migrations.

## ✨ Features
- **Responsive Dark/Light Theme**: Auto-detects and persists in browser localStorage.
- **Project CRUD**: Create, read, update, and delete engineering projects.
- **Priority & Status Tracking**: Low / Medium / High priority badges with color codes.
- **Real-time Search & Multi-filter**: Filter by status, priority, and sort by date or alphabetical order.
- **Live Metrics Dashboard**: Visual progress bar and project counters.
- **Data Export**: Export your projects to JSON backup file with one click.
- **Keyboard Shortcuts**: <kbd>Esc</kbd> to cancel editing.

## 🚀 Local Development

```powershell
# Install dependencies
npm install

# Run automated tests
npm test

# Start the server locally
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deploy to GitHub & Vercel

### Step 1: Push to GitHub
In PowerShell inside this folder:
```powershell
git init -b main
git add .
git commit -m "Initial commit: full-stack project tracker"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in.
2. Click **Add New...** > **Project**.
3. Import your GitHub repository.
4. Keep the default settings (Vercel will automatically read `vercel.json` and `api/index.js`).
5. Click **Deploy**. Your app is now live!
