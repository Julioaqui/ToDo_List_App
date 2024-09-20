require("dotenv").config();
const express = require("express");
const Connection = require("./src/connection/db");
const cors = require("cors");
const app = express();
app.use(express.json());
// console.log(process.env.PORT);
app.use(cors());
const PORT = process.env.PORT || 8080




app.listen(PORT, ()=>{
    Connection();
    console.log(`Server running at port ${PORT}`)
})