var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1cfa6876e527ba5a5ec8dcd30cdd39d7&units=imperial';
//appid=1cfa6876e527ba5a5ec8dcd30cdd39d7
http://api.openweathermap.org/data/2.5/weather?appid=1cfa6876e527ba5a5ec8dcd30cdd39d7&units=imperial&q=Orono
// error -> http://localhost:3000/api.openweathermap.org/data/2.5/weather?appid=1cfa6876e527ba5a5ec8dcd30cdd39d7&units=imperial&q=Orono
module.exports = {
  getTemp: function (location) {
    // templat string
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(requestUrl);
    return axios.get(requestUrl).then(function(res) {
      //propriatry way axios handle error checking
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
      //console.log(res.data.main.temp);
    }, function (err) {
      throw new Error(err.response.data.message);
    });
  }
}
