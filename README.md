# Clipboard Manager

A simple React-based clipboard history manager Progressive Web App (PWA) built with Vite and TailwindCSS.

---

## Features

- Save and manage up to 50 clipboard entries  
- Search clipboard history  
- Copy any clipboard item with one click  
- Clear clipboard history easily  
- Offline support via Service Worker  
- Installable as a PWA on supported devices  

---

## Project Structure

```plaintext
clipboard-manager/
├── postcss.config.cjs      
├── vite.config.ts
├── public/
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
└── tailwind.config.js
```
src/ — React components and styles

public/ — Static assets like icons, manifest, service worker

index.html — Main HTML template

Config files: Vite, PostCSS, Tailwind, TypeScript

---

## Getting Started

- Prerequisites
```txt
Node.js (>= 18 recommended)

npm
```
---

## Installation

- Clone the repo and install dependencies:
```bash
git clone https://github.com/kokhinmaungwin/clipboard-manager.git
```
```bash
cd clipboard-manager
```
Install dependencies:
```bash
npm install
```
- Development

Start the local dev server with hot reload:
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

- Build

Build optimized production files into dist/:
```bash
npm run build
```
- Deploy

Deploy dist/ to GitHub Pages:
```bash
npm run deploy
```

---

## Usage

Open the app in your browser or install it as a PWA

Copy text and it will be saved in clipboard history

Manage, delete, and use saved clipboard entries

---


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.


---

## License
MIT © khinmaungwin
This project is licensed under the MIT License. See the LICENSE file for details.

---
