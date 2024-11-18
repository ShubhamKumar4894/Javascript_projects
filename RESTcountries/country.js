const countryName= new URLSearchParams(location.search).get('name');
const flag= document.querySelector('.container img');
const heading= document.querySelector('.left-data h2');
const nativeName= document.querySelector('.nativeName')
const population= document.querySelector('.population');
const region= document.querySelector('.region');
const subRegion= document.querySelector('.sub-region');
const capital= document.querySelector('.capital');
const domain= document.querySelector('.domain');
const currency= document.querySelector('.currency');
const language= document.querySelector('.language');
const border_countries=document.querySelector('.border-countries');
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then(([country])=>{
    console.log(country)
    if(country.name.nativeName){
        nativeName.innerText=Object.values(country.name.nativeName)[0].common;
    }
    else{
        nativeName.innerText=country.name.common;
    }
    flag.src=country.flags.svg;
    heading.innerText=country.name.common;
    population.innerText=country.population.toLocaleString("en-IN");
    region.innerText=country.region;
    subRegion.innerText=country.subregion;
    if(country.capital){
        capital.innerText=country.capital[0];
    }
    domain.innerText=country.tld.join(',  ');
    if(country.currencies){
        currency.innerText=Object.values(country.currencies).map((currency)=>currency.name).join(', ');
    }
    if(country.languages){
        language.innerText=Object.values(country.languages).join(', ')
    }
    if(country.borders){
        country.borders.forEach((border_code) => {
            fetch(`https://restcountries.com/v3.1/alpha/${border_code}`)
            .then((res)=>res.json())
            .then(([data])=>{
                console.log(data);
                const borderCountry= document.createElement('a');
                borderCountry.innerText=data.name.common;
                border_countries.append(borderCountry);
                borderCountry.href=`country.html?name=${data.name.common}`
            });
        });
    }
    
})