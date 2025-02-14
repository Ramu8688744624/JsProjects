const searchBtn=document.getElementById("searchBtn");
const inputText=document.getElementById("cityInput");
const temperature=document.getElementById("temperature");
const cityName=document.getElementById("cityName");
const humidityValue=document.getElementById("humidity");
const windSpeedValue=document.getElementById("windSpeed");


searchBtn.addEventListener('click',async () => {
const city=inputText.value.trim();
if(city){
    const resonse=await getData(city);
    updateWeatherUI(resonse);
}

});

async function getData(city) {
    const apiKey="dc6f259fc990d1e2485706724ebc9b13";
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data=await response.json(); 
        return data;
    }catch(error){
        console.log("Something Went Wrong!");
        return null;
    }
    
   
}

function updateWeatherUI(data) {
    if(data && data.cod === 200){
    const {main,wind,name}=data;
    const tempratureValue=main.temp;
    const windSpeed=wind.speed;
    const humidity=main.humidity;
    
        temperature.textContent=`${Math.round(tempratureValue)}°C`
    cityName.textContent=name;
    humidityValue.textContent=`${humidity}%`;
    windSpeedValue.textContent=`${windSpeed}km/h`;
    }else{
        cityName.textContent = "City not found!";
        temperature.textContent = '';
        humidityValue.textContent = '';
        windSpeedValue.textContent = '';
    }
    
}