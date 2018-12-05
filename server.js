const 
    express = require("express")
    app = express()
    path = require("path")
    PORT = 3000;

// CONFIGURATIONS

// MIDDLEWARE SETUP
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"public","view")))
console.log(__dirname);
// ROUTES
app.get("/", (req,res)=> {
    res.sendFile("view/index.html");
});

// DEFINE PORTS TO LISTEN TO
app.listen(PORT, err => {
    console.log(err || `Connected to Port${PORT}`);
})