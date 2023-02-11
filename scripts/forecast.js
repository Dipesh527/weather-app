
const key = '95UsgPs0NFU0r6XdlbSACagTJz45qnZt';

const getCity = async(city) =>{
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query =   `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  // const response = await fetch(base + query , {
  //     method: 'GET',
  //     withCredentials: true,
  //     crossorigin:true,
  //     mode: 'no-cors',
  // });
  const data = await response.json();
  return data[0];

};


// get information of th city
// getCity('kathmandu')
// .then(data => console.log(data))
// .then(err => console.log(err));

// get information of the weather

const getInfo = async(id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];

};
