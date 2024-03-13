const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config({path:"./.env"})
// const PORT = process.env.PORT

app.listen(process.env.PORT, ()=>{
    console.log(`this server is running on the port ${process.env.PORT}`)
})