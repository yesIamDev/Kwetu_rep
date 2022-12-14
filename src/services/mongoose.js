require('dotenv').config();
const mongoose = require('mongoose')

// connection a la base de donnees

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connexion succes!");
}

connectDB().catch( e => console.log(e));

module.exports = {
    connectDB
}