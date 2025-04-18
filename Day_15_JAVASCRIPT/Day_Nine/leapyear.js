// Check whether a year is a Leap Year or not

function isleapyear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const year = isleapyear(2024);
console.log(year);

function isleapyear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const year2 = isleapyear2(2100);
const year3 = isleapyear2(2400);
const year4 = isleapyear2(2200);
const year5 = isleapyear2(2004);
console.log(year2, year3, year4, year5);