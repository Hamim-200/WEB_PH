function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        console.log('Your year is leap Yera', year);
    }

    else {
        console.log('your year is not leap year', year);
    }
}

isLeapYear(1933);

// Return Type
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }

    else {
        return false;
    }
}

const ismyYearLeapYear = isLeapYear(1943);
console.log('myyear', ismyYearLeapYear);
