const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3001;
const router = express.Router()
app.use(cors({origin: '*'}));
const db = new sqlite3.Database("C:\\Users\\egor_\\DataGripProjects\\dmaTimeTable\\identifier.sqlite");
app.use(express.json())


// app.get('/users', (req, res) => {
//     db.all('SELECT * FROM users', [], (err, rows) => {
//         if (err) {
//             throw err
//         }
//         res.send(rows);
//     });
// });
//
// app.post('/users', (req, res) => {
//     console.log(req.body)
//
//     db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, [`${req.body.name}`, `${req.body.email}`], (err) => {
//         if (err) {
//             console.error(err.message)
//             res.status(500).send('Server Error')
//         } else {
//             res.send('User added successfully')
//         }
//     })
// })


app.get('/usersList', (req, res) => {
    db.all('SELECT * FROM usersList', [], (err, rows) => {
        if (err) {
            throw err
        }
        res.send(rows);
    });
});

app.post('/usersList', (req, res) => {
    console.log(req.body)
    const {cityFrom, cityTo, timeTable, name, phone} = req.body

    db.run(`INSERT INTO usersList (cityFrom, cityTo, timeTable, name, phone) VALUES (?, ?, ?, ?, ?)`, [cityFrom, cityTo, timeTable, name, phone], (err) => {
        if (err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        } else {
            res.send('User added successfully')
        }
    })
})






app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
        });