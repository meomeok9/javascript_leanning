var money = tip = 0;
function bil(_money){
    tip = (_money>=50 && _money<=300) ? _money*0.15 : _money*0.2;
    console.log(`The bill was ${_money}, the tip was ${tip}, and the total value ${_money + tip}`);
}
bil(275);
bil(40);
bil(430);