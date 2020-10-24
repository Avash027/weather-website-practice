console.log('This is a change')

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
    
    var btn = document.querySelector('button')
    btn.className = "button is-primary is-loading"


    const location = search.value
        fetchFunction(location)
    })

//This is to fetch json data from database
 
const fetchFunction=function(locationName){
    
    const FetchUrl='/weather?address='+locationName
    fetch(FetchUrl).then((response)=>{
        response.json().then((data)=>{

            var btn = document.querySelector('button')
            

        if(data.error){
       
        btn.className = "button is-danger"
        document.querySelector('#msg-1').innerHTML=`<article class="message is-danger">
        <div class="message-header">
          <p>ERROR</p>
          <button class="delete" aria-label="delete" onclick="del()"></button>
        </div>
        <div class="message-body">
       <strong>Please enter a valid location</strong>
        </div>
      </article>`

        }
        else{
            btn.className = "button is-primary"
        //     messageTwo.textContent=''
        // messageOne.textContent=data.temperature
        // messageThree.textContent='Location : '+data.location
        // messageFour.textContent=data.time
        // messageFive.textContent=data.description
        document.querySelector('#msg-1').innerHTML=`<article class="message is-primary">
        <div class="message-header">
          <p>Weather Report</p>
          <button class="delete" aria-label="delete" onclick="del()"></button>
        </div>
        <div class="message-body">
        <strong>${data.temperature}</strong>
        <br>
        ${data.location}
        <br>
        ${data.time}
        <br>
        <p> It is currently ${data.description} outside </p>
        
        </div>
      </article>`
    }
    })
})
}


function del(){
    document.querySelector('#msg-1').innerHTML='<p></p>'
}
 