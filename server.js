const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// PORT
const PORT = process.env.PORT || 4000
// MiddleWare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
// API Calls
const routers = require('./src/routes');
app.use("/api",routers);

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));