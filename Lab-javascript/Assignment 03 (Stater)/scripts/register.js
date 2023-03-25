'use strict';
const cl = something => console.log(something);
const dgEBI = id => document.getElementById(id);

const firstNameInput = dgEBI('input-firstname');
const lastnameInput = dgEBI('input-lastname');
const userNameInput = dgEBI('input-username');
const passwordInput = dgEBI('input-password');
const confirmInput = dgEBI('input-password-confirm');
const btn = dgEBI('btn-submit');

const isDuplicateUserName = function () {
  const allUsers = getAllUser();
  //if nothing in arr then cant not be duplicate
  if (allUsers.length === 0) return false;
  
  const [regUser] = allUsers.filter(
    userData => userData.userName === userNameInput.value
  );
  // check all user where input userName = userdata same mean duplicate is true
  if (regUser != undefined) return true;

  return false;
};

// cl(checkDuplicateUserName(''));

const validate = function () {
  // check empty
  if (
    firstNameInput.value === '' ||
    lastnameInput.value === '' ||
    userNameInput.value === '' ||
    passwordInput.value === '' ||
    confirmInput.value === ''
  ) {
    alert('Can not empty imput!');
    return false;
  }
  //check duplicate user name
  if (isDuplicateUserName()) {
    alert('User name is already used!');
    return false;
  }
  //check password length
  if (passwordInput.value.toString().length < 8) {
    alert('Your password atleast 8 !');
    return false;
  }
  //check confirm password ssame password
  if (passwordInput.value !== confirmInput.value) {
    alert('Confirm password is not same password!');
    return false;
  }

  return true;
};

const func = function () {
  if (validate()) {
    const userArr = getAllUser();
    const userReg = new User(
      firstNameInput.value,
      lastnameInput.value,
      userNameInput.value,
      passwordInput.value,
      confirmInput.value
    );
    userArr.push(userReg);

    localStorage.setItem('allUsers', JSON.stringify(userArr));
    alert('Sucsess to Register!');
    //document.forms('my-form').reset(); resform but not need because jump to new page

    window.location.href = '../pages/login.html';
  }
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    func();
  }
});
btn.addEventListener('click', func);
