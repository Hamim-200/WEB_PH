//for a given string tell me whether it has even number of charater or not

function evenSizeString(str){
    const size = str.length;
    console.log(str,size);

    if(size % 2 === 0){
        console.log('Even size')
    }
    else{
        console.log('odd size');
    }
}
evenSizeString('Dhaka');
evenSizeString('Faka');