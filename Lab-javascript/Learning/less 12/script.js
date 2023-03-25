'use strict';
const cl =obj => console.log(obj);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
  currency: "EUR",
  locale: "pt-PT", // de-DE

};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
let curAccount , timer;
const displayMovements = function(acc, sort = false){
  containerMovements.innerHTML ='';
  //--------------------------------⬇ copy movement-------
  let movs = sort ? acc.movements.slice().sort((a,b)=> a-b) : acc.movements;
    

  movs.forEach(function(mov , i){
    
    
    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2,'0');
    const month = `${date.getMonth()+1}`.padStart(2,'0');
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;
    

    const type = mov > 0 ?'deposit' :'withdrawal';
    const html =`
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}

const updateUI= curAcc =>{
  displayMovements(curAcc);
  calcDisplayBalance(curAcc);
  calsDisplaySumary(curAcc);
  //set timer out

}

const starLogOutTImer =function(){
  //set time to 5 minutes
  let time = 120; 
  let min,sec;
  const tick = function(){
    min = `${Math.floor(time/60)}`.padStart(2,0);
    sec = `${time%60}`.padStart(2,0);
    labelTimer.textContent = `${min} : ${sec}`;
    // decrese 1s
    if(time===0){
      clearInterval(timer);
      labelWelcome.textContent ='Log in to get Started';
      containerApp.style.opacity = 0;
    }
    time--;
  }

  //in each call prit the remain time to UI
  tick();
  timer = setInterval(tick , 1000);
  return timer;
}

const calcDisplayBalance = accL =>{ 
  // save balance
  accL.balance =accL.movements.reduce((acc,curMov) => acc+=curMov, 0);
  labelBalance.textContent = `${accL.balance} EUR`;
}
const calsDisplaySumary = account => {  
  //co the su dung ham tren changing ben duoi de reduce
  const movement = account.movements;
  labelSumIn.textContent = `${movement.filter(mov => mov >0).reduce((acc,mov) =>acc+= mov, 0)} €`;
  labelSumOut.textContent = `${Math.abs(movement.filter(mov => mov <0).reduce((acc,mov) =>acc+= mov, 0))} €`;
  labelSumInterest.textContent =`${
    movement
    .filter(mov => mov >0)
    .map(diposit => diposit * account.interestRate/100)
    .filter(diposit =>diposit >=1)
    .reduce((acc,curInter) =>acc+= curInter,0)} €`;
};

 
  // fake login
  // (function(){
  //   updateUI(account1);
  //   containerApp.style.opacity =100;
  //   labelWelcome.textContent =`Welcome back, ${account1.owner.split(' ')[0]}`;
  // })();

  
btnLogin.addEventListener('click', function(e){
  //prevent form from submiitng
  curAccount = accounts.find(acc => acc.useName === inputLoginUsername.value);
  if(curAccount?.pin === Number(inputLoginPin.value)){
    labelWelcome.textContent =`Welcome back, ${curAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity =100;
    if(timer) clearInterval(timer);
   timer = starLogOutTImer();
  updateUI(curAccount);
  }
  // clear input field
   inputLoginUsername.value = inputLoginPin.value ='';

});

// transfer money 

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amout = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find( acc=>
   acc.useName === inputTransferTo.value );
    inputTransferAmount.value = inputTransferTo.value = '';
   if( amout> 0 &&
    reciverAcc &&
     curAccount.balance >= amout &&
      reciverAcc?.useName !== curAccount.useName){
    curAccount.movements.push(-amout);
    reciverAcc.movements.push(amout);
        // add tranfer date
        curAccount.movementsDates.push(new Date().toISOString());// automatic tranform to date

    updateUI(curAccount);
  clearInterval(timer);
  timer = starLogOutTImer();

   }

});


/// find index method
btnClose.addEventListener('click', function(e){
  if(curAccount.useName ===inputCloseUsername?.value && inputClosePin?.value == curAccount.pin){
    accounts.splice(accounts.findIndex(acc=> acc = curAccount),1); // khac so voi bai giang cua Jonas
    //hide UI
    containerApp.style.opacity = 0;
    cl(accounts);
  }
  
  inputCloseUsername.value = inputClosePin.value ='';
});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if( amount >0 && curAccount.movements.some( mov =>mov >= amount*0.1)){
    curAccount.movements.push(amount);
    curAccount.movementsDates.push(new Date().toISOString());// automatic tranform to date

    updateUI(curAccount);
    clearInterval(timer);
    timer = starLogOutTImer();
  }
  inputLoanAmount.value ='';
})


let sorted =false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(curAccount.movements, !sorted);
  sorted =!sorted;
});

const now = new Date();
const day = `${now.getDate()}`.padStart(2,'0');
const month = `${now.getMonth()+1}`.padStart(2,'0');
const year = now.getFullYear();
const hour = now.getHours();
const min= now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour} :${min}`;

// day// month// year




//-----------------------------------------------------------------------------//
// tao ra ten viet tat
const createUserNames = accs =>accs.forEach(acc=> acc.useName = acc.owner.toLowerCase().split(' ').map(name=>name[0]).join(''));
createUserNames(accounts);

cl(accounts);
// tao ra mang chi co deposit hoac withdral

const changing = (acc , isDeposit = true) => {
  return isDeposit ? acc.movements.filter(mov => mov > 0) : acc.movements.filter(mov => mov < 0);
}
const deposits = changing(account1 , 1);
const withdral = changing(account1, 0);
cl('Deposit + withdral:')
cl(deposits);
cl(withdral);

/// reduce

//.reduce(function(acc, cur,i,arr),first value of loop = acc)


const balanceAcc = account1.movements.reduce((acc, cur,i,arr)=> {cl(`Iteration : ${i} ${acc}`);
  return acc + cur;
},0);
cl(balanceAcc);
const max = account1.movements.reduce((acc,curMov)=>acc > curMov ? acc: curMov,account1.movements[0]);
 cl(max);

 // sum all move convert from EUR to USD

 const eurToUsd= 1.1;
const totalDeposit = account1.movements.filter(mov => mov >0).map(mov => mov * eurToUsd).reduce((acc,mov)=>acc+=mov,0);
cl(totalDeposit);

// find method , return first elemt

const firstWithDrawal = account1.movements.find(mov => mov < 0);

cl(firstWithDrawal);

const account = accounts.find(acc=>acc.owner==='Jessica Davis');
cl(account);


// some and every

console.clear();
cl(account1.movements);
cl(account1.movements.includes(-130));

//kiem tra xem co move >0 dung some
const anyDeposits = account1.movements.some(mov => mov >5000);

cl( anyDeposits);

// every: all must return true or all => false
cl(account1.movements.every(mov => mov >-10000));

//separate call back ham call back viet ngoai
const deposit = mov =>mov > 0;
cl(account1.movements.every(deposit));


// flat and flat map

console.clear();
const arr =[[1,2,3], [4,5,6] ,7, 8];
cl(arr);
cl(arr.flat());

const arrDeep = [[[1,2],3], [4,[5,6]] ,7, 8];
cl('flat');
cl(arrDeep.flat());
cl(arrDeep.flat(1));
cl(arrDeep.flat(2));
//flat
//const overalBalace = accounts.map(acc=> acc.movements).flat().reduce((acc, mov) => acc +mov,0);

//flat map
const overalBalace2 = accounts.flatMap(acc=> acc.movements).reduce((acc, mov) => acc +mov,0);
cl(overalBalace2);



//sap xep sorting array.

const owners = ['Jonas','Zach','Adam','Martha'];
cl(owners.sort());
cl(owners);// thay doi index


cl(account1.movements);
// cl(account1.movements.sort()); cant not sort number
// sort with call back fuction



// account1.movements.sort((a,b) =>{
//   if (a < b) return -1;//return < 0, a , b (keep order) 
//   if (a > b) return 1;//return > 0, a , b (switch order)
// });
//rut gon
account1.movements.sort((a,b)=> a-b);//return a,b

cl(account1.movements);

// xep nguoc lai
account1.movements.sort((a,b)=> b-a);//return a,b

cl(account1.movements);


// arr.fill(value , firstIndex , endIndex) =>> fill method
// aray.form
const x = new Array(7); x.fill(1, 2 ,5);
const y = Array.from({length: 7}, ()=>1);
const z = Array.from({length: 7}, ( _, i)=> i+1);
cl(x);
cl(y);
cl(z);




labelBalance.addEventListener('click',function(e){
  const movementUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€','')));
  
  cl(movementUI);

  // const movementUI2 = [...document.querySelectorAll('.movements__value')];
  
})