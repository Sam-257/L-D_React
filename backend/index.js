const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyparser.json())
require('dotenv').config();

const dbHost = process.env.DBHOST;
const dbUser = process.env.DBUSER;
const dbPassword = process.env.DBPASSWORD;
const dbName = process.env.DBNAME;
const dbPort = process.env.DBPORT;
const port = process.env.PORT || 3002;

const db = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
    port: dbPort,
});

db.connect((err) => {
    if (err) {
        console.error(err, "Error while connecting to Database");
    } else {
        console.log("Connected to database");
    }
});

app.get("/view",(req,res) =>{
    let qr = "SELECT * FROM users";
    db.query(qr,(err,result) => {
        if (err) throw err;
        res.status(200).send({
            data: result
        })
    });
});

app.post("/add", (req, res) => {
    let user_name = req.body.user_name;
    let user_email = req.body.user_email;
    let user_password = req.body.user_password;
    let user_address = req.body.user_address;
    if (user_name == undefined || user_email == undefined || user_password == undefined || user_address == undefined || user_name == '' || user_email == '' || user_password == '' || user_address == '') {
        res.status(401).send({
            message: "Invalid Data",
            data: req.body
        });
    } else {
        let qr = `INSERT INTO users(user_name, user_email, user_password, user_address) VALUES ('${user_name}','${user_email}','${user_password}','${user_address}')`;
        db.query(qr, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.status(200).send({
                message: "data Inserted",
            });
        });
    }
});




app.listen(port, () => {
    console.log("Server running...");
});
