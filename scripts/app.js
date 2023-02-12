 
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time');

const UpdateUI = (data) => {

  const cityDetails =  data.cityDetails;
  const weather = data.weatherDetails;
  console.log(weather);
  details.innerHTML = (
     `
     <h3>${cityDetails.EnglishName}</h3>
     <div class="weather">
       ${weather.WeatherText}
     </div>
     <div>${weather.Temperature.Metric.Value} &deg;C</div>
     `
  );
  // updating img
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg' ;
    time.setAttribute('src' , timeSrc);
    

  if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
  };




};

const updateCity = async(city) =>{

const cityDetails = await getCity(city);
const weatherDetails = await getInfo(cityDetails.Key);
return {
  cityDetails: cityDetails,
  weatherDetails: weatherDetails
  

};
  
};

cityForm.addEventListener('submit' , e => {


  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();
  
  updateCity(city)
  .then(data => UpdateUI(data))
  .then(err => console.log(err));



});

