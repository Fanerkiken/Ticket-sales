const UsersPhone = require("../models/UsersPhone");

class UsersPhoneController {
  constructor() {}

  getAll = async (req, res) => {
    try {
      const usersPhones = await UsersPhone.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.send({ usersPhones });
    } catch (err) {
      console.log(err);
    }
  };

  create = async (req, res) => {
    try {
      const usersPhone = await UsersPhone.create({
        login: req.body.login,
        phone: req.body.phone,
      });
      res.send({ usersPhone });
    } catch (err) {
      console.log(err);
    }
  };
}

const usersPhoneController = new UsersPhoneController();
module.exports = usersPhoneController;
