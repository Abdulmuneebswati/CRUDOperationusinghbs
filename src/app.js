const express = require("express");
const path = require("path")
const route = require("./router/route");


const port = process.env.PORT || 8000;
const app = express();
app.use(route);
const dynamicPath = path.join(__dirname,"../templates/views");
app.set("view engine","hbs");
app.set('views',dynamicPath);

app.listen(port,()=>console.log("Done"));