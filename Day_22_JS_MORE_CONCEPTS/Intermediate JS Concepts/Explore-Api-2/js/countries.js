const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name : ${country.name.common}</h3>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        
        `;
        // <p>Captial : ${country.capital ? country.capital[0] : 'No Capital'}</p>
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h3>Name : ${country.name.common}</h3>
    <h4>Captial : ${country.capital ? country.capital[0] : 'No Capital'}</h4>
    <img src = "${country.flags.png}">

    `
}

loadCountries();