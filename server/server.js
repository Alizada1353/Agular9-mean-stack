require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');

/** control cross-origin requests */
const allowedOrigins = process.env.allowedOrigins.split(',');
app.use(cors({
    origin: function(origin, callback) {
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1) {
            const msg = 'Access is not allowed to this origin!'
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}))
/** control cross-origin requests */



app.get('/', (req, res) => res.send('connection successful!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))