const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const User = require('./models/user')
const { ObjectId } = require('mongodb')
const url = 'mongodb://localhost/UsersDB'

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
const con = mongoose.connection 

con.on('open',_=>console.log('DB connected: ',url))
con.on('error',err=>console.log('Error: ',err))

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
/* let corsOption = {
    origin: "*",    
    "methods":"GET,POST,DELETE",
    "preflightContinue": true,
    "optionSuccessStatus": 204
} */
app.use(cors());
// app.options('*', cors(corsOption))

app.get('/', async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.send('Error')
    }    
})    

app.post('/', async(req,res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        category: req.body.category,
        tech: req.body.tech,
        filename: req.body.filename,
        photo64: req.body.photo64
    })    

    try{
        const oneUser = await user.save()
        res.json(oneUser)
    }catch(err){ res.send('Error!! ',err)}    
})    

app.put('/',async(req,res)=> {
    console.log('fds',req.body.id)
    try{
        const user = await User.findById(req.body.id) 
        user.name = req.body.name
        const a1 = await user.save()
        res.json(a1)

    }catch(err){
        console.log('error hai!',err)
        res.send('Error bro')
    }

})

app.delete('/',async(req,res)=> {
    console.log('delete kar',req.body.id)
    try{
        const user = await User.findById(req.body.id) 
        const deleted = await user.remove()
        res.json(deleted)

    }catch(err){
        console.log('error hai! del mei',err)
        res.send('Error bro')
    }

})

app.listen(8080, ()=>console.log('On 8080'))