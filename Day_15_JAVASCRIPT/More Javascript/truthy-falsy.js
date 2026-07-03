// Truthy Value
// 1.True
// 2.string
// 3.Any Number
// 4.'0','false'
// 5.object
// 6.Array

// Falsy value 
// 1.false
// 2.0
// 3.Empty String
// 4.undefined
// 5.Null
//check falsy
const y = null;
if (!y) {
    console.log('value is falsy')
}

//check truty
const z = ' ';
if (!!z) {
    console.log('value is truthy')
}