function toUpper(str,cb){
    const upper = str.toUpperCase();
    cb(upper);
}

toUpper('hamim ahmed',(str)=>{
     console.log('Hello',str);
});