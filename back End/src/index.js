const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors= require('cors');
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

const db = mongoose.createConnection("mongodb://localhost:27017/Services", {useNewUrlParser: true, useUnifiedTopology: true})
const servicesSchema = new mongoose.Schema({
    image: String,
    content: String,
    subcontent: String,
    done: Boolean,
    Creation_time: Date,
})

const serviceModel = db.model('Services', servicesSchema);

app.post('/service', async (req,res) =>{
    const data= req.body;
    data.done= false;
    data.Creation_time= new Date();
    const newServices = new serviceModel(data);
    await newServices.save();
    res.send(newServices);
})

app.get('/service', async (req,res) =>{ 
    const newdata = await serviceModel.find(); 
    res.send(newdata);
})

const port = 8000;

app.listen(port, ()=>{
    console.log(`listening port ${port}!`);
})