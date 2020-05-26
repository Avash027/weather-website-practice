const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXZhc2htaXRyYSIsImEiOiJja2FkZzRwNXExcTlnMndxd2d6aXM1NnlqIn0.IRI7mAbItVsF_C0STJv1bw&limit=1'
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }
            else if(response.body.features.length===0)
            {
                callback('Location not found',undefined)
            }
         else {
             
            callback(undefined, {

                longitude: response.body.features[0].geometry.coordinates[0],
                latitude: response.body.features[0].geometry.coordinates[1],
                
            })
        }
    })
}

module.exports = geocode