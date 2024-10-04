
// require fx'n basically import the node from the express

const express=require("express");
const app=express();


// app.listen(3000,()=>{
//     console.log("Apps is running successfully");
// });

//load config file from the env file
// by ddefault if it's not returmm then call the 4000 port
require("dotenv").config();
const PORT=process.env.PORT || 4000;

// middleware to parse the human body
app.use(express.json());


// now we have to import the routes 
const todoRoutes=require("./routes/todo");
// now api v1 likha rahega then todoroutes par humne map kar diya hain

app.use("/api/v1",todoRoutes);

// now we have to start the server
// when we have to use the inbuilt port no
app.listen(PORT,()=> {
    console.log(`Server is started ,${PORT}`);
});

// calling of the db
const dbconnect=require("./config/database");
dbconnect();

// we have to include the default route also
app.get("/",(req,res)=>{
    res.send(`<h1> This is the home page </h1>`); 
})

