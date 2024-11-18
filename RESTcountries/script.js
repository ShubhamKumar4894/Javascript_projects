const countryContainer=document.querySelector('.country-container');
const filterByRegion= document.querySelector('.filter-by-region');
let inputField= document.querySelector('.input-field');
let details='';
const darkMode=document.querySelector('.dark-mode');

fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
    renderDetails(data);
    details=data;
})

document.addEventListener('change',(event)=>{
    fetch(`https://restcountries.com/v3.1/region/${event.target.value}`)
    .then((res)=>res.json())
    .then((data)=>{
        renderDetails(data);
    })
})

inputField.addEventListener('input',(event)=>{
   let filteredData= details.filter((country)=> country.name.common.toLowerCase().includes(event.target.value.toLowerCase()));
   renderDetails(filteredData);
})
darkMode.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
})
function renderDetails(data){
    countryContainer.innerHTML='';
    data.forEach((country) => {
        const name= country.name.common;
        const Population= country.population.toLocaleString("en-IN");
        const region=country.region;
        const Capital=country.capital?.[0];
        const flagURL= country.flags.svg;
        const countryCard= document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href=`/RESTcountries/country.html?name=${country.name.common}`;
        countryCard.innerHTML=`
            <img src="${flagURL}"alt="flag">
            <div class="card-text">
                <p class="card-title"><strong>${name}</strong></p>
                <p><strong>Population: </strong> ${Population}</p>
                <p><strong>Region: </strong>${region}</p>
                <p><strong>Capital: </strong>${Capital}</p>
            </div>`
    
        countryContainer.append(countryCard);
    });
}


