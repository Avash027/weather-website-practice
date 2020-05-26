const weatherform= document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#msg-1')
const messageTwo=document.querySelector('#msg-2')
const messageThree=document.querySelector('#msg-3')
const messageFour=document.querySelector('#msg-4')
const messageFive=document.querySelector('#msg-5')


//To get the name of place

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    messageOne.textContent="Loading...."
    const location = search.value
        fetchFunction(location)
    })

//This is to fetch json data from database
 
const fetchFunction=function(locationName){
    
    const FetchUrl='http://localhost:9000/weather?address='+locationName
fetch(FetchUrl).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
        messageOne.textContent=''
        messageTwo.textContent='error : '+data.error
        messageThree.textContent=''
        messageFour.textContent=''
        messageFive.textContent=''
        }
        else{
        messageOne.textContent=data.temperature
        messageThree.textContent='Location : '+data.location
        messageFour.textContent=data.time
        messageFive.textContent=data.description
    }
    })
})
}
 