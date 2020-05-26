const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

const path=require('path')
const express=require('express')
const hbs=require('hbs')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const indexpath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

const app=express() //It is an express server

//Setting up port

const port= process.env.PORT||3000


//Setup handlerbar engine and views
app.set('view engine', 'hbs')
app.set('views',viewsPath)

//This is to use the partial
hbs.registerPartials(partialsPath)

//Set up always use
 app.use(express.static(indexpath))


//This is for main page
app.get('',(req,res)=>{
	res.render('index',{
		title:"Weather",
		name:"Avash"
	})
})


//This is for help page
app.get('/help',(req,res)=>{
	res.render('help',{
		title:"This is help page",
		name:"Avash"
	})
})

//This is for about page
app.get('/about',(req,res)=>{
	res.send('This is about page')
})

//This is help page
app.get('/help/*',(req,res)=>{
	res.render('nopage',{
		title:"No help page exsist"
	})
})

app.get('/products',(req,res)=>{
	if(!req.query.search)
	{
		res.send({
			error:"No Query found"
		})
	}

})

app.get('/weather',(req,res)=>{
	if(!req.query.address)
	{
		res.send({
			error:"Send an address"
		});
	}
	else{
		geocode(req.query.address, (error, {latitude,longitude}={}) => {

			forecast(latitude, longitude, (error, data) => {
				if(error){
					res.send({error})
				}
				else
				{
					res.send(data)
				}
		  })
		  })
	}
})

app.get('*',(req,res)=>{
	res.render('nopage',{
		title:"Page does not exsist"
	})
})

app.listen(port,()=>{
	console.log('Server is up on port '+port)
})

