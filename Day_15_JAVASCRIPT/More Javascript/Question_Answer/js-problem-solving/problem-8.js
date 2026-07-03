// Check if a number is Prime

function isPrime() {
    for (let i = 2; i < Number; i++) {
        if (Number % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7))


