(function () {
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
})();
