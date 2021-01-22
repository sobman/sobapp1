const express=require('express')
const app=express();
const port=process.env.PORT ||3000;
app.use(express.static('public'))


const users=[
    {user:'sobhe'},
    {user:'ahmed'},
    {user:'jhon'}
]

app.get('/getusers',(req,res)=>{
    res.send(users);
})


app.listen(port,function(){
    console.log("listen")
})
