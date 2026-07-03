function getSumofAnArray(numbers){
    let sum = 0;
    for (let i = 0; i< numbers.length; i++){
        const index= i ;
        const element = numbers[index];
        sum = sum + element;
        console.log(index,element,sum);
       
    }
}

const myNumbers = [1,2,3,4,5,6,7,8,9,10];
getSumofAnArray(myNumbers)