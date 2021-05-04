const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--close');
    navMain.classList.remove('main-nav--open');
  }
});

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('toggle--open')) {
    navToggle.classList.remove('toggle--open');
    navToggle.classList.add('toggle--close');
  } else {
    navToggle.classList.add('toggle--open');
    navToggle.classList.remove('toggle--close');
  }
});

// form-error

const profileForm = document.querySelector('.profile-form');
const inputName = document.querySelector('.profile-form__input--name');
const inputLogin = document.querySelector('.profile-form__input--login');
const iconLogin = document.querySelector('.profile-form__input--login-icon');

profileForm.addEventListener("submit", function (evt) {
  if (!inputName.value || !inputLogin.value) {
    evt.preventDefault();
    inputLogin.classList.add("profile-form__error");
    iconLogin.classList.add("profile-form__error-icon");
    inputName.classList.add("profile-form__error");
  }
});
