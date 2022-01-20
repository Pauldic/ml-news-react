const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();

app.disable("x-powered-by");

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", compression(), (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Frontend server listen on PORT ${PORT}`);
});
