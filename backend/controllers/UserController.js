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
    console.log(req.headers.authorization);
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email: email });
    // if (!user) {
    //   res.send("You dont have any access to this user");
    // }

    if (user.password === password && user.email === email) {
      const token = await TokenGenerator({ uid: user._id, expiresIn: 30 });
      res.send({ token: token });
      return;
    } else {
      res.send("Invalid password or email");
      return;
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
