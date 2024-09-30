const button= document.querySelector('.button');
const Input= document.querySelector('.Input');
const temperature=;

async function checkWeather(city){
    const apiKey="7fad108574dbbdc308807e719da0d223";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const data= await fetch(`${url}`).then(Response => Response.json());
    
}
button.addEventListener('click',function(){
    checkWeather(Input.value);
})