const router = require("./src/server/routers/weather-routers")
const express = require("express");
const path = require("path");
require("./src/db/mongoose");

let app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname,"/")))

console.log(path.join(__dirname,"/"))
app.use(router)
app.listen(8090,()=>{
    console.log("Server started at 8090 port");
})