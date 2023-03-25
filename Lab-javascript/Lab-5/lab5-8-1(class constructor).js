class person {
    constructor(name, weight, h) {
        this.fullName = name;
        this.mass = parseInt(weight);
        this.height = parseInt(h);
        this.calcBMI = weight / (h * h);
    }
}

const m = new person('Mark Miller', 78, 1.69);
const j = new person('John Smith', 92, 1.95);

console.log(j.calcBMI>m.calcBMI ? `John's BMI (${j.calcBMI}) is higher than Mark's (${m.calcBMI})!` : `Mark's BMI (${m.calcBMI}) is higher than John's (${j.calcBMI})!`);

