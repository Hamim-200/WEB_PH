function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}


const homeToOfficeMiles = 6;
const homeToOfficeKm = milesToKilometer(homeToOfficeMiles);
console.log(homeToOfficeKm);