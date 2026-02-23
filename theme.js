// Get current theme from localStorage (will be 'active' or null)
let lightMode = localStorage.getItem('lightMode');

const themeSwitch = document.getElementById('themeToggle');

function enableLightMode() {
  document.body.classList.add('light-mode');
  localStorage.setItem('lightMode', 'active');
  if (themeSwitch) themeSwitch.textContent = '🌙 Dark';
}

function disableLightMode() {
  document.body.classList.remove('light-mode');
  localStorage.setItem('lightMode', null);
  if (themeSwitch) themeSwitch.textContent = '☀️ Light';
}

// Apply saved theme on page load
if (lightMode === 'active') enableLightMode();

// Wire up button — re-reads localStorage fresh on every click (key fix)
if (themeSwitch) {
  themeSwitch.addEventListener('click', function () {
    lightMode = localStorage.getItem('lightMode');
    if (lightMode !== 'active') {
      enableLightMode();
    } else {
      disableLightMode();
    }
  });
}
