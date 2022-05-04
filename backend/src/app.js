const express = require("express");
const path = require("path");


// let's create express app

const app = express();

// use some application-level middlewares

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router

const router = require("./router");

app.use(router);

// ready to export
module.exports = app;


/*
2 tables 
users (id , lastname ,firstname, email )
favorite ( id(user) , idcocktail , ? etat(true/false)?)



app.get api/favorite
let sql = "SELECT * FROM favorite";


*/
// app.get("/api/favorite", (req, res) => {
//     let sql = "SELECT * FROM favorite";
//     connection.query(sql, (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send("Error from database");
//       } else {
//         res.json(result);
//       }
//     });
//   });

// app.post("/api/favorite", (req, res) => {
//     const {id,idcocktail} = req.body
//     connection.query(
//       "INSERT INTO favorite (id, idcocktail ) VALUES (?, ?)",
//       [id, idcocktail],
//       (err, result) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send("Error favorite cocktail");
//         } else {
//           const id = result.insertId;
//           const newfavorite = {id, idcocktail }
//           res.status(201).json(newfavorite);
//         }
//       }
//     );
//   });