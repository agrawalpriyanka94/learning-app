const express=require('express');
const  app=express();
app.use(express.json());
app.listen(8888 , ()=>{
    console.log('server started at port 8888 , hy');
})
