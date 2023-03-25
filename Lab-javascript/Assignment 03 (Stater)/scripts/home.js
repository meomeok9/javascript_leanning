'use strict';
const cl = something => console.log(something);
const dgEBI = id => document.getElementById(id);
const loginRegisContainer = dgEBI('login-modal');
const welcome = dgEBI('welcome-message');
const content = dgEBI('main-content');
const btnLogout = dgEBI('btn-logout');

const init = function () {
  const currenUser = getCurrentUser(); //=> a current user or null
  //hide login&register button and show welcome + logout button
  if (currenUser != null) {
    loginRegisContainer.style.display = 'none';
    welcome.textContent = `Welcome ${currenUser.firstName}`;
    content.style.display = 'block';
  }
  //show login&register button and hide welcome + logout button
  if (currenUser == null) {
    loginRegisContainer.style.display = 'block';
    welcome.textContent = '';
    content.style.display = 'none';
  }
};
init();

const logout = function () {
  //can be remove localStorage.removeItem('currenUser');
  //only set again
  localStorage.setItem('currenUser', null);
  window.location.href = './pages/login.html';
};

btnLogout.addEventListener('click', logout);
