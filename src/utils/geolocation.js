const request = require('request')

const geolocation = (cityName, callback) => {
    const apiKey = '486ceaca5b07535b6c6af20098109f69';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=`+ encodeURIComponent(cityName)+`&appid=${apiKey}`;

    
    request({ url, json:true }, (error, {body}) => {
        if (error) {
            callback('Cannot connect!', undefined) 
        } else if (body.name === false) {
            callback('Try again!', undefined) 
        } else {
            callback(undefined, {
                latitude : body.coord.lat,
                longitude : body.coord.lon,
                location : body.name
            }) 
        }
    })
}

module.exports=geolocation