require("dotenv").config();
const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** control cross-origin requests */
// const allowedOrigins = process.env.allowedOrigins.split(',');
// app.use(cors({
//     origin: function(origin, callback) {
//         if(!origin) return callback(null, true);
//         if(allowedOrigins.indexOf(origin) === -1) {
//             const msg = 'Access is not allowed to this origin!'
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }))
/** control cross-origin requests */



app.get('/', (req, res) => res.send('connection successful!'));

const validator = require("./validators/validator");
app.post("/signup", function (req, res) {
    
  if (validator.checkInputDataNULL(req, res)) return false;
  if (validator.checkInputDataQuality(req, res)) return false;


  var dbFunctions = require("./models/DB_connector");
  dbFunctions.createUser(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))