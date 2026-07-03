const student = {
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
const examOutput = student.exam();
console.log(examOutput);

const improveExamOutput = student.improveExam('algebra');
console.log(improveExamOutput);

const remaining  = student.treat(900);
console.log(remaining);