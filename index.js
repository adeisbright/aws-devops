const express = require("express")

const app = express() 

app.use(express.json()) 

app.get("/" , (req , res) => res.send("Hello,World"))
app.listen(4000, () => {
    console.log("Running on port 4000")
})