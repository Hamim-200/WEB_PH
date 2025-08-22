try {
  let result = 10 / 0;
  console.log(result);

  // Force an error
  console.log(hello); // hello is not defined
} 
catch (error) {
  console.log("An error occurred:", error.message);
}



// THROW
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} 
catch (error) {
  console.log("Error:", error.message);
}


// FINALLY
try {
  console.log("Trying...");
  throw new Error("Something went wrong!");
} 
catch (error) {
  console.log("Caught:", error.message);
} 
finally {
  console.log("This always runs.");
}
