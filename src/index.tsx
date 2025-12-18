import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

/* ---------- PWA Install Button Logic ---------- */
let deferredPrompt: any;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = document.getElementById("installBtn");
  if (btn) btn.hidden = false;
});

window.addEventListener("appinstalled", () => {
  const btn = document.getElementById("installBtn");
  if (btn) btn.hidden = true;
  deferredPrompt = null;
});

/* Click handler */
document.addEventListener("click", async (e) => {
  const target = e.target as HTMLElement;
  if (target?.id !== "installBtn") return;

  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;

  target.hidden = true;
});

/* ---------- Service Worker ---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/clipboard-manager/sw.js");
  });
}

/* ---------- React Render ---------- */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
