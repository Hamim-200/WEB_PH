// Remove duplicate items from an array

const people = ['rashid','shihab','moon','emon','lemon','ashik','moon'];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
 return unique
}

const uniqueArray = noDuplicate(people);
console.log(uniqueArray)