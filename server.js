const express = require("express");
const app = express();

const setting = {
    root: __dirname
};

app.use(express.static("public"));

app.get("*", (req,res)=>{
    res.sendFile("/html/index.html", setting);
});

app.listen(process.env.PORT || 3000);