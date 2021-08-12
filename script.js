fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => countryName(data))

const countryName = countries => {
    console.log(countries);
    const countryContainer = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.setAttribute('class', 'country');
        const countryInfo = `<h3>${country.name}</>
        <h4>${country.capital}</h4>
        <button class = 'button'>Details</button>`;
        div.innerHTML = countryInfo;
        countryContainer.appendChild(div);
    });
}