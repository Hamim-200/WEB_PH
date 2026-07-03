const numbers = [1, 2, 3, 4, 5];

//.reduce (accumulatorFunction , Initial value)
//accumulatorFunction use two parameters

//const total = numbers.reduce ((previous,current) => previous+current,0);

const total = numbers.reduce((previous, current) => {
  console.log(previous , current);
    // 0 1
    // 1 2
    // 3 3
    // 6 4
    // 10 5
    //15
  return previous + current;
}, 0);

console.log(total);
