const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  constructor() {}

  login = async (req, res) => {
    try {
      const condidate = await User.findOne({
        // User.findOne - findOne это все предостовляет sequalize
        where: {
          login: req.body.login,
        },
      });
      if (!condidate) {
        res.status(404).send("User not found");
      }
      const checkPassword = await bcrypt.compare(
        req.body.password,
        condidate.password
      );
      if (!checkPassword) {
        res.status(404).send("User not found");
      }
      const token = jwt.sign(
        { ...condidate.dataValues },
        process.env.SECRET_TOKEN
      ); //сайн) {...condidate.dataValues} - объект пользователя, это данные которые нужно подписать вторым параметром
      // ( то есть моим секретным ключом )
      res.send({
        token,
      });
    } catch (err) {
      console.log(err);
    }
  };
  getById = async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.send({ user });
    } catch (err) {
      console.log(err);
    }
  };

  getAll = async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.send({ users });
    } catch (err) {
      console.log(err);
    }
  };
  create = async (req, res) => {
    try {
      const user = await User.create({
        login: req.body.login,
        password: req.body.password,
      });
      res.send({ user });
    } catch (err) {
      console.log(err);
    }
  };
}

const userController = new UserController();
module.exports = userController;
