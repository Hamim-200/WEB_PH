function a(){
    console.log('a')
    b();
    console.log('aa')

}
function b(){
    console.log('b')
    console.log('bb')
    d();
    console.log('bbb')
}
function d(){
    console.log('d')
    console.log('db')
    console.log('ddd')
}

a();
// b();