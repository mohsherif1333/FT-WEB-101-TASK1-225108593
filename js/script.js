// Toggle Dark Mode on body element when the button is clicked
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});