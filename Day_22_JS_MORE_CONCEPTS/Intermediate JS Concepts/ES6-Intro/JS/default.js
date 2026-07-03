function add(first, second) {
  console.log(first, second);
  if (second === undefined) {
    second = 0;
  }
  const total = first + second;
  return total;
}
const result = add(10);
console.log(result);

// Second option
function add(first, second = 0) {
  const total = first + second;
  return total;
}
const result1 = add(10);
console.log(result1);

// Full Name
function fullName(first, last = "khan") {
  const name = first + " " + last;
  return name;
}
const name = fullName("fahad");
console.log(name);
