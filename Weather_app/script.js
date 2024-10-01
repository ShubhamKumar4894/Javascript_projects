const button= document.querySelector('.button');
const Input= document.querySelector('.Input');
const temp= document.querySelector('.temperature');
const wind= document.querySelector('.winddesc');
const weatherDesc= document.querySelector('.desc');
const humidity= document.querySelector('.range');
const weatherimg= document.getElementById('weatherImg');

async function checkWeather(city){
    const apiKey="7fad108574dbbdc308807e719da0d223";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const data= await fetch(`${url}`).then(Response => Response.json());
    temp.innerHTML=`${Math.round(data.main.temp)}°C`;
    wind.innerHTML=`${Math.round(data.wind.speed*3.6)}km/h`;
    weatherDesc.innerHTML=`${data.weather[0].description}`;
    humidity.innerHTML=`${data.main.humidity}%`
    console.log(data);
    switch(data.weather[0].main){
        case 'Clouds':
            weatherImg.src = "./Asset/cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "./Asset/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "./Asset/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "./Asset/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "./Asset/snow.png";
            break;

    }
}
button.addEventListener('click',function(){
    checkWeather(Input.value);
})