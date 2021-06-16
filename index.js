const express = require("express");
const connDB = require("./config/mongoDB");
const { PORT } = require("./constants");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connDB();

app.get("/", (req, res)=>{
    res.send({data:"hello bro"})
})

app.listen(PORT, () => {
  console.log("Node server started...........");
});
