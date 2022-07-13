const express =  require('express');
const app = express();
const cors = require("cors");

app.use(cors);
app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// const mongoose = require('mongoose');
// const res = require('express/lib/response');
// mongoose.connect('mongodb+srv://praveenaThota97:Appuveena@cluster0.rrsjz.mongodb.net/?retryWrites=true&w=majority',
// {
//     dbName:'MERNProject',
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// },err=>err?console.log('error'):console.log("connected"));

// const userLoginSchema = mongoose.Schema({
//     userName:{
//         type:String,
//         required:true
//     },
//     passWord:{
//         type:String,
//         required:true
//     },
//     emailId:{
//         type:String,
//         required:false
//     }
// })
// const connection = mongoose.connection;
// const userLogin = connection.model('userDetails',userLoginSchema,'userCollection');

app.get('/login',function(req,res){
    // let tempData = [];
    // userLogin.find({},function(err,userData){
    //     console.log(userData);
    //     tempData.push(userData);
    //     res.json(tempData);
    // })
    res.send("HElloWorld!");
})
app.listen(3003);
console.log("Hii Node, you are at port 3003");