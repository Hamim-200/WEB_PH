//1. find even number from this array

// const numbers = [1,2,34,23,1,34,1221,31,45,7,867,645,35,7,5,7,5,8,5,439,79,6345,7,58,4,79,5,97,569,57,89,57,8,5,6] 

// const oddEven = (array) =>{
//     let evenNumber = [];
//     let oddNumber = [];
    
//     for (let i =0;i<array.length;i++){
//         const element = array[i];

//         if(element%2 == 0){
//             evenNumber.push(element)
//         }
//         else{
//             oddNumber.push(element)
//         }
//     }
//     return oddNumber;

// }

// const result = oddEven(numbers);
// console.log(result);



// FIND THE LARGEST NAME

const checkfriends = (array) =>{
    let biggestname = array[0];

    for (let i =0;i<array.length;i++){
        const element = array[i];

        if(element.length>biggestname.length){
            biggestname = element;
        }
    }
    return biggestname;
}

const friends = ["Rahim","Karim","Jobbar","Salam","Barkat","Monalisa"]
const result = checkfriends(friends);
console.log(result)