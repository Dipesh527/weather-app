
const cityForm = document.querySelector('form');


const updateCity = async(city) =>{

const cityDetails = await getCity(city);
console.log(cityDetails);
  
};

cityForm.addEventListener('submit' , e => {
  e.preventDefault();

  
  const city = cityForm.city.value.trim();
  cityForm.reset();


  updateCity(city)
    // .then(data = console.log(data))
    //   .then(err => console.log(err));



});
