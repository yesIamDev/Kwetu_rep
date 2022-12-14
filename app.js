// CRUD CREAT READ UPTADE DELETE

require('dotenv').config();
const {connectDB} = require('./src/services/mongoose')
const userRoutes = require('./src/routes/user')


const express = require('express')
const app = express()
const PORT = process.env.PORT


connectDB().catch( e => console.log(e));

app.use(express.json());
app.use(userRoutes);


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})

