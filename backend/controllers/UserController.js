const {
  userCreateQuery,
  allUser,
  userReadById,
  userUpdateQuery,
  userDeleteQuery,
  userReadByEmail,
} = require("../query/userQuery");
const UserSchema = require("../database/model/User");
const { TokenGenerator } = require("../helper/helper");
const bcrypt = require("bcrypt");

exports.userById = async (req, res) => {
  try {
    const result = await userReadById(req);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.usersAll = async (req, res) => {
  try {
    const result = await allUser();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.userCreate = async (req, res) => {
  try {
    const result = await userCreateQuery(req);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.userUpdate = async (req, res) => {
  try {
    await userUpdateQuery(req);
    res.status(200).send(`SUCCESSFULLY UPDATED`);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.userDelete = async (req, res) => {
  try {
    await userDeleteQuery(req);
    res.status(200).send(`SUCCESSFULLY DELETED`);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.userGetEmail = async (req, res) => {
  try {
    const result = await userReadByEmail(req);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const bcrypt = require("bcrypt");

    const user = await UserSchema.findOne({ email: email });
    const check = await bcrypt.compare(password, user.password);

    if (!user) {
      res.send("You don't have any user account");
    }
    if (check && user.email === email) {
      const token = await TokenGenerator({ uid: user._id, expiresIn: 30 });
      const saw = await UserSchema.findOne({ email: email });
      const ab = saw._id;
      res.status(200).send({ token: token, _id: ab });
      return;
    } else {
      res.status(401).send("Invalid password or email");
      return;
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
