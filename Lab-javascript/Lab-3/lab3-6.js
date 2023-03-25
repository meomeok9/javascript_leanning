var a1=a2=a3=b1=b2=b3=avg1=avg2=0;



function setA(x){
    if(a1==0){
        a1=x;
    }else if(a1!=0 && a2==0){
        a2=x;
    }else if(a1!=0 && a2!=0 && a3==0){
        a3=x;
    }else return false;
}
function setB(x){
    if(b1==0){
        b1=x;
    }else if(b1!=0 && b2==0){
        b2=x;
    }else if(b1!=0 && b2!=0 && b3==0){
        b3=x;
    }else return false;
}
// ham day du lieu vao team 1
function pushA(){
    var x = prompt('Enter point of Dolphins team :',0);
    setA(parseInt(x));
    let point1 = document.getElementById("point1");
    point1.innerHTML=`${a1==0? '?': a1} ${a2==0? '?': a2} ${a3==0 ? '?': a3}`;
    if(a1!=0&&a2!=0&&a3!=0){
        avg1 = (a1+a2+a3)/3;
        let p1 =document.getElementById("p1");
        p1.innerHTML = `Dolphin's avange point: ${avg1}`;
    }
    cp();
}
// ham day du lieu vao team 2
function pushB(){
    var x = prompt('Enter point of Koalas team :',0);
    setB(parseInt(x));
    let point2 = document.getElementById("point2");
    point2.innerHTML=`${b1==0? '?': b1} ${b2==0? '?': b2} ${b3==0 ? '?': b3}`;
    if(b1!=0&&b2!=0&&b3!=0){
        avg2 = (b1+b2+b3)/3;
        let p1 =document.getElementById("p2");
        p1.innerHTML = `Koala's avange point: ${avg2}`;
    }
    cp();
}
// ham so sanh va dua ra ket qua
function cp(){
    if(avg1!=0 && avg2!=0){
        let finalResult= document.getElementById("result");
        if(avg1>avg2 && avg1 >=100){
            finalResult.innerHTML = `Dolphin team won!`;//console.log same content
        }else if(avg1<avg2 && avg2 >100){
            finalResult.innerHTML = `Koala team won!`;
        }else if(avg1==avg2 && avg1 >=100){
            finalResult.innerHTML=`Both win the trophy!`;
        }else finalResult.innerHTML =`Both team lose`;
    }
}
