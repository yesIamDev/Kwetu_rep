const User = require('../models/user');

const login = async (req,res) => {
    try{
        const user = await User.findUser(req.body.mail, req.body.password);
        res.status(200).send("Login succes !")
    } catch(e){
        console.log(e)
    }
}

module.exports = login