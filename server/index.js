import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express()
import mysql from 'mysql2';


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: 'clinik',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/api/get', (req, res) => {
    const sqlSelect = 'SELECT * FROM clinik';
    db.query(sqlSelect, (err, result) => {
        console.log("ResultGet: ", result)
        console.log("ErrorGet: ", err)
        res.send(result)
    })
})



app.post('/api/insert', (req, res) => {

    const moviewName = req.body.movieName
    const movieReview = req.body.movieReview
    const date = req.body.date
    const text = req.body.text
    const time = req.body.time
    const name = req.body.name
    console.log(time)
    const sqlInsert = "INSERT INTO clinik (moviewName,  movieReview,  text, time, name, date) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [moviewName, movieReview, text, time, name, date], (err, result) => {
        console.log("Reault: ", err)
        res.send(result)
    })
})





app.listen(3001, () => {
    console.log("running on port 3001")
}) 