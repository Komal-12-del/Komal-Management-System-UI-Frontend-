const express = require("express")

const app = express()

app.use(express.json())

app.use(express.static("public"))

app.post("/signup", function(req, res){

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Password:", password)

    res.json({
        message: "Signup Successful"
    })

})

app.listen(5000, function(){
    console.log("Server running on port 5000")
})