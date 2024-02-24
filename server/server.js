import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);

    })
})

app.post('/student', (req, res) => {
    const sql = "INSERT INTO `student` (`name`,`email`,`grade`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.grade
    ]
    db.query(sql, [values], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    })
})




app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM student WHERE id =?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);

    })
})




app.put('/update/:id', (req, res) => {
    const sql = 'UPDATE student SET `name`=?, `email`=?, `grade`=? WHERE id=?';

    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email, req.body.grade, id], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    })
})


app.delete('/delete/:id', (req, res) => {
    const sql = 'DELETE FROM student WHERE id=?';

    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: "Error inside server" });
        return res.json(result);
    })

})





//sign in sign up server side

app.post('/user', (req, res) => {
    const sql = "INSERT INTO `user` (`username`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]

    const sqlGet = "SELECT * FROM `user` WHERE `username` = ?";
    const value = req.body.username;

    db.query(sqlGet, value, (err, data) => {
        if (data.length == 0) {
            db.query(sql, [values], (err, result) => {
                
                if (err) return res.json({ message: "Error inside server" });
                return res.json({message: true});
            })
        }
        else {
            return res.json({ message: false });
        }



    })
})



app.post('/login', (req, res) => {
    const sql = "SELECT `password` FROM user WHERE `username` = ?";

    const value = req.body.username;

    db.query(sql, value, (err, data) => {
        if (data.length == 0) {
            return res.json({ message: "invalid" })
        }
        else {
            if (data[0].password == req.body.password) {
                return res.json({ success: true })
            }
            else {
                return res.json({ success: false });
            }
        }



    })


})





app.listen(8081, () => {
    console.log('listening');
})
