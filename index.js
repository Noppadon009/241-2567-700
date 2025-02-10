const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []
//path: /users ใช้สำหรับแสดงข้อมูล user ทั้งหมด
app.get('/users', (req, res) => {
   res.json(users);

})
//path: /user ใช้สำหรับสร้างข้อมูล user ใหม่

app.post('/user', (req, res) => {
    let user = req.body;
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        user: user
    });
})


app.listen(port, (req,res) => {
    console.log('Http Server is running on port' + port)
});