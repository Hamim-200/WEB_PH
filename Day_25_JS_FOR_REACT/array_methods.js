let numbers = [1, 2, 3, 4];

numbers.forEach(num => {
  console.log(num * 2);
});

// Output: 2, 4, 6, 8


let students = [
  { name: "Hamim", score: 85 },
  { name: "Rafi", score: 45 },
  { name: "Raisa", score: 72 },
  { name: "Imran", score: 30 }
];

// forEach → show all names
students.forEach(s => console.log(s.name));

// map → get array of scores only
let scores = students.map(s => s.score);
console.log(scores); // [85, 45, 72, 30]

// filter → pass mark (>=50)
let passed = students.filter(s => s.score >= 50);
console.log(passed);

// find → first student who failed
let failedOne = students.find(s => s.score < 50);
console.log(failedOne);
