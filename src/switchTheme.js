const Theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};

let bodyTheme = document.querySelector('body')
bodyTheme.classList.add(Theme.light)
let switcher = document.querySelector('#theme-switch-toggle')
let currentTheme

function checkboxSwitch () {
  if (bodyTheme.className === Theme.light) {
    bodyTheme.classList.add(Theme.dark)
    bodyTheme.classList.remove(Theme.light)  }
else {
    bodyTheme.classList.add(Theme.light);
    bodyTheme.classList.remove(Theme.dark);
  }
  //console.log(bodyTheme.classList)
  currentTheme = bodyTheme.getAttribute('class')
  localStorage.setItem('Theme', currentTheme)
}

switcher.addEventListener('click', checkboxSwitch)
const savedTheme = localStorage.getItem('Theme')
function saveTheme() {
    if (savedTheme) {bodyTheme.classList.add(savedTheme) }
    if (savedTheme === Theme.dark) {switcher.setAttribute('checked', true)}
}
saveTheme()