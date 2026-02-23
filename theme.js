// theme.js — shared across all pages
// The <head> inline snippet already applied the class to <html> before paint.
// This script wires up the toggle button after DOM is ready.

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  function isLight() {
    return document.documentElement.classList.contains('light-mode');
  }

  function updateLabel() {
    btn.textContent = isLight() ? '🌙 Dark' : '☀️ Light';
  }

  updateLabel();

  btn.addEventListener('click', function () {
    document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('vigil-theme', isLight() ? 'light' : 'dark');
    updateLabel();
  });
});
