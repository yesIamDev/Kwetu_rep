const User = require('../models/user');

const register = async (req,res) => {
    const user = new User(req.body);
    try{
        const UserSaved =  await user.save();
        res.send(UserSaved);
        console.log(UserSaved);
    }catch(err){
        console.log(err);
    }
}

module.exports = register