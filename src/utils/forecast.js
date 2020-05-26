const request=require('request');

const forecast=(lat,long,callback)=>{

const url = "http://api.weatherstack.com/current?access_key=dc9be5a3f7eb6626a6f0e189540ddf6f&query="+lat+","+long+"&units=m#"
request({url,json:true},(error,body)=>{
	if (error) {
		callback('Unable to connect to weather service!',undefined)
         
     
     } else {
        try{
         callback(undefined, {temperature:' It is currently  ' + body.current.temperature + ' degress celsius out.',
        location:body.location.name,
        time:'Weather was last checked at '+body.current.observation_time,
        description:body.current.weather_descriptions[0]
    })
    
}
catch(e){
    callback('Unable to find the location',undefined)
}



}})

}





module.exports=forecast