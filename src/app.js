const express = require('express')
const app = express()
app.use(express.json())
const users = [
    {
        id: 1,
        firstName: "Lucas",
        lastName: "Martin",
        email: "martin12@gmail.com",
        password: "456789",
        age: 18
    },
    {
        id: 2,
        firstName: "Pablo",
        lastName: "Jose",
        email: "pablito47@gmail.com",
        password: "dream22",
        age: 25
    }
]
let baseId = 1


app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.post('/users', (req, res) => {
    const data = req.body
    const newUser = {
        id: baseId++,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age
    }
    users.push(newUser)
    res.status(201).json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const data = users.find((item) => id === item.id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({
            message: 'Invalid Id'
        })
    }
})




app.listen(9000, () => {
    console.log('server started at: https//localhost:9000')
})

module.exports = app
