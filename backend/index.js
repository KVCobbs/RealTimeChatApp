//Here we are creating our server 

const express = require('express');
const app = express();


//Here is the port
const PORT = 5000;

//HomeScreen to make sure it's working 
app.get("/", (req, res) => {
    res.status(200).send("Testing 123")
});

//Listen to the port 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})