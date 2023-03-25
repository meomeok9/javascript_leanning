'use strict';
const cl = something => console.log(something);
const dgEBI = id => document.getElementById(id);

const userNameInput = dgEBI('input-username');
const passwordInput = dgEBI('input-password');
const btn = dgEBI('btn-submit');

const checkUserLogin = function (a, b) {
  const allUsers = getAllUser();
  //check no user in array, if !0 can be next step
  if (allUsers.length === 0) return false;
  //get  array contain user that has username and password
  const [correctUser] = allUsers.filter(
    userData =>
      userData.userName === userNameInput.value &&
      userData.passWord === passwordInput.value
  );
  //if correctUser 0 mean correct user name and password
  if (correctUser != undefined) {
    // set login user to current user
    localStorage.setItem('currenUser',JSON.stringify(correctUser));
    return true;
  }

  return false;
};

const func = function () {
  //validate
  if (userNameInput === '' || passwordInput === '')
    alert('User name and Password must be fill');
  if (checkUserLogin()) {
    window.location.href = '../index.html';
  } else {
    alert('Wrong user name or password!');
  }
};
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    func();
  }
});
btn.addEventListener('click', func);
