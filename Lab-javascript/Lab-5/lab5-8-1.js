// tao objec person voi ham tao va ham tinh BMI
const person={
    fullName : '',
    mass : 1,
    height : 1,
    setPerson : function(fName,m,h) {
                    this.fullName=fName;
                    this.mass = m;
                    this.height = h;
                    return this;
                },
    calcBMI : function (){return (this.mass/(this.height*this.height)).toFixed(2);}           
};

const markMiller = person.setPerson('Mark Miller', 78, 1.69);
var mBMI = markMiller.calcBMI();
console.log(markMiller);
console.log('Bye mark miller !!');
const johnSmith = person.setPerson('John Smith', 92, 1.95);// đến đây mark miller ra đi :)) , nhưng đã lấy đc BMI của mark nên ... let her go
var jBMI = johnSmith.calcBMI();
console.log(jBMI > mBMI ? `John's BMI (${jBMI}) is higher than Mark's (${mBMI})!` : `Mark's BMI (${mBMI}) is higher than John's (${jBMI})!`);