const first = { a: 5, b: 2, c: 5 ,e:1};
const second = { a: 5, c: 5, b: 2 };

// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);

function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);