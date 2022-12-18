const request = require('request')

const weather = (latitude, longitude, callback) => {
    const apiKey = '486ceaca5b07535b6c6af20098109f69';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=` + latitude + `&lon=` + longitude + `&appid=${apiKey}`;
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
          callback('Unable to connect!', undefined);
        } else if (body.cod !== 200) {
          callback('Unable to find location!', undefined);
        } else {
          callback(undefined, body.wind.speed + ' is the wind speed');
        }
      });
}

module.exports=weather