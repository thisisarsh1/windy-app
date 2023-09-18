
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1fce21c6b2msh637a2b44a7e5fb9p121e1bjsn267e7e9f6958",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getweather = (city) =>{
    cityName.innerHTML = city
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
    .then((response) => response.json())
    .then((response) => {
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      console.log(response);
    })

  .catch((err) => console.error(err));}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getweather(city.value)
})
getweather("Mumbai")