import { Theme } from './themes';

const refs = {
  theme: document.querySelector('.js-switch-input'),
  currentTheme: document.querySelector('body'),
};
// console.log(refs);
// console.log(refs.theme);
// console.log(refs.currentTheme);

refs.theme.addEventListener('change', changeTheme);

checkTheme();

function checkTheme() {
  const savedTheme = localStorage.getItem('currentTheme');

  if (savedTheme === Theme.DARK) {
    refs.currentTheme.classList.add(savedTheme);
    refs.theme.checked = true;
  }
}

function changeTheme(e) {
  if (e.target.checked) {
    refs.currentTheme.classList.remove(Theme.LIGHT);
    refs.currentTheme.classList.add(Theme.DARK);
    localStorage.setItem('currentTheme', Theme.DARK);
  } else {
    refs.currentTheme.classList.remove(Theme.DARK);
    refs.currentTheme.classList.add(Theme.LIGHT);
    localStorage.setItem('currentTheme', Theme.LIGHT);
    // localStorage.removeItem('currentTheme');
  }
}
