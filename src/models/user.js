const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

// schema de creation d'un user

const userSchema = new mongoose.Schema({
  mail: {
    type: String,
    required: true,
    unique:true,
    validate(v) {
      if (!validator.isEmail(v)) throw new Error("Email invalid!");
    },
  },
  password: {
    type: String,
    required: true,
    validate(v) {
      if (!validator.isLength(v, { min: 5, max: 8 }))
        throw new Error("PassWord invalid!");
    },
  },
});

// securisation des mots de passe avec bcrypt

userSchema.pre("save", async function () {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 8);
});

// Ajout d'une fonction static findUser au userSchema

userSchema.statics.findUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Erreur, impossible de se connecter!");
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Erreur, impossible de se connecter!");
  console.log('login succes....!');
  return user;
};

// creation du model user a partir de userSchema

const User = mongoose.model("User", userSchema);

module.exports = User;
