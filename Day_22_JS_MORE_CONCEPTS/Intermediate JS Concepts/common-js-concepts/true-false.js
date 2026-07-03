/*
    Truthy:
    -------
1.true
2.any positive and negative number except 0
3.any string except empty string
4.'0','false' 
5.{}
6.[]

    Falsy
    ------
1.false
2.0
3.''(Empty string)
4.undefined
5.null

*/

const x = '';
if(x){
    console.log('Value of x is truty');
}
else{
    console.log('Value of x is falsy');
}