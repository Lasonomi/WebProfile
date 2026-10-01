# Neha — Personal Portfolio

Website portfolio React (Create React App) + tema neo-brutalism + Lanyard 3D + GitHub repos.

## Local

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deploy ke Vercel

### Cara 1 — dari GitHub (disarankan)

1. Push project ini ke GitHub  
   ```bash
   git init
   git add .
   git commit -m "portfolio ready for vercel"
   git branch -M main
   git remote add origin https://github.com/Lasonomi/NAMA-REPO.git
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) → **Add New Project**
3. Import repo GitHub kamu
4. Setting otomatis (sudah ada `vercel.json`):
   - Framework: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Klik **Deploy**

### Cara 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Ikuti prompt login, lalu deploy.

### File penting untuk Vercel

| File | Fungsi |
|------|--------|
| `vercel.json` | Build command, output folder, SPA rewrite, header `.glb` |
| `package.json` | `homepage: "."` + `CI=false` agar build tidak gagal karena warning |
| `public/card.glb` | Model 3D Lanyard |
| `public/tegar.jpeg` | Foto di kartu Lanyard |
| `public/lanyard.png` | Tekstur tali Lanyard |

Tidak perlu Environment Variable khusus untuk project ini.
