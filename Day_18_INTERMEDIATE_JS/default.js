function add(num1,num2=0){
    const result = num1 + num2;
    console.log(num1,' + ',num2,' = ',result);
    return result;
}

const sum = add(5); 
const sum2 = add(5,10); 


function fullName (first,last = ''){
    const full = first + ' ' + last;
    return full;
}
