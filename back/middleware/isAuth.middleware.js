const jwt = require("jsonwebtoken");

const isAuthMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      //фолси значения
      res.status(401).send("unauthorized");
      return;
    }
    const isVerify = jwt.verify(token, process.env.SECRET_TOKEN); //env файл окружения //isVerify = расшифрованному токену (то есть user)
    req.user = isVerify; //обращаемся к полю user

    next(); //чтобы цепочка продолжилась
  } catch (err) {
    res.status(401).send("unauthorized");
  }
};

module.exports = isAuthMiddleware;
