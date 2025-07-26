/**
 * Truthy:
 * -------
 * 1. True
 * 2. Any number pos and neg will be truthy other than 0
 * 3. Any String 
 * 4.'0','false'
 * 5.{}
 * 6.[]
 * 
 * Falsy
 * -----
 * 1. False
 * 2. 0
 * 3. Emty string
 * 4.undefined, Null
 **/


const x = 'false';
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('Value is falsy');
}