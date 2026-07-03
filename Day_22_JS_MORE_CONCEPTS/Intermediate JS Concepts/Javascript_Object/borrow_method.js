const rahim = {
    name: 'Ramim',
    money:1000,
    study: 'Math',
    subject: ['calculas','algebra','geometry'],
    exam: function(){
        return this.name + ' is perticipating in exam.'
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name}  is taking improvement exam on ${subject}`
    },
    treat: function (amount) {
        //return this.money = this.money - amount;
        this.money = this.money - amount;
        return this.money;
    }
}

const result = rahim.exam();
console.log(result);

const rafi = {
    name: 'Rafi',
    money : 8000
}
const result2 = rahim.exam.call(rafi);
console.log(result2);
const RafiMoney = rahim.treat.call(rafi,500,100);
console.log(RafiMoney);

const RafiMoney2 = rahim.treat.apply(rafi,[450,50]);
console.log(RafiMoney2);