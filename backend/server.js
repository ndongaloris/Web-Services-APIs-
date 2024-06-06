const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const DATABASE_URL = process.env.DATABASE_URL;       
const client = new MongoClient(DATABASE_URL);


app.get('/', (req, res) => {
    res.send("Hello");
});

/**
* Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
* See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
*/

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
*************************/
const port = process.env.PORT || 8080;
const host = process.env.HOST;


/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
});