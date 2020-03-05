//const path = require("path")
const express = require("express")
const {main} = require("./app")


const app = express()
const port = process.env.PORT || 3000
// app.use(express.static(path.join(__dirname, "./public")))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

app.get("/weather", async (req,res) => {
    const response = await main(req.query.address)
    console.log(response)
    res.send(response)
})

app.listen(port, ()=> console.log(`server is running on ${port}`))