fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => countryName(data))

const countryName = countries => {
    //console.log(countries);
    const countryContainer = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.setAttribute('class', 'country');
        const countryInfo = `<img class = "flag" src = "${country.flag}">
        <h3>${country.name}</h3>
        <br>
        <button class = 'button' onclick= "countryDetails('${country.name}')">Details</button>`;
        div.innerHTML = countryInfo;
        countryContainer.appendChild(div);
    });
}

const countryDetails = name =>{
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then(data => {
        renderCountryInfo(data[0])});
}

const renderCountryInfo = country => {
    const detailsInfo = document.getElementById('country-details');
    detailsInfo.innerHTML = `<img class = "flag" src = "${country.flag}">
    <h3>Country Name: ${country.name}</h3>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Currency: ${country.currencies[0].code}</p>
    <p>Language: ${country.languages[0].name}</p>
    <p>Area: ${country.area}</p>`;
    window.scrollTo(0,0);
}