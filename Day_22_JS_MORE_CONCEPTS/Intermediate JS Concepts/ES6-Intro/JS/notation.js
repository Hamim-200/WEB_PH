const student = {
    name:'Sakib Khan',
    age: 15,
    class: 'Ten',
    marks: {
        math:78,
        physics:89,
        chemistry:65
    }
}

//Dot Notation
const marks = student.marks;
const math = student.marks.math;

//Braket Notation
const chemistry = student['marks']['chemistry']
console.log(chemistry);

const subject = 'math';
const mathMarks = student.marks[subject];
console.log(mathMarks);