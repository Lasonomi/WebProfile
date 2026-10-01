# Neha — Personal Portfolio

Website portfolio pribadi berbasis React (Create React App) dengan tema neo-brutalism.

## Fitur

- Tema siang / malam (toggle di navbar)
- Animasi typing (TextType) & reveal on scroll
- DotGrid interaktif (GSAP)
- Smooth cursor
- Marquee testimonials
- **3D Lanyard card** — foto profil interaktif (bisa digeser) dari React Bits
- **GitHub Repositories** — otomatis mengambil list repo publik dari akun [Lasonomi](https://github.com/Lasonomi)
- Responsive & neo-brutalism design

## Cara Menjalankan

```bash
npm install
npm start
```

Buka [http://localhost:3000](http://localhost:3000).

## Build Production

```bash
npm run build
```

## Catatan Lanyard

- Asset `card.glb` dan `lanyard.png` ada di folder `public/`
- Foto di kartu memakai `public/tegar.jpeg` (prop `frontImage`)
- Geser kartu dengan mouse / touch untuk interaksi fisika

## Struktur

```
src/
  App.js
  App.css
  component/
    Lanyard/Lanyard.jsx   # 3D lanyard card
    GitHubRepos.jsx
    DotGrid.js, TextType.js, Marquee.jsx, SmoothCursor.jsx
public/
  tegar.jpeg, card.glb, lanyard.png
```
