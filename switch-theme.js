function toggleTheme() {
  const themeLink = document.getElementById('theme-style');
  if (themeLink.getAttribute('href') === 'style.css') {
    themeLink.setAttribute('href', 'light-theme.css');
  } else {
    themeLink.setAttribute('href', 'style.css');
  }
}
