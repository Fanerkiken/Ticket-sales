const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const pathsRoute = require("./routes/paths.route");
const timetableRoute = require("./routes/timetable.route");
const cityRoute = require("./routes/city.route");
const userRoute = require("./routes/user.route");
const usersPhoneRoure = require("./routes/usersPhone.route");

const app = express();
const port = process.env.PORT || 3001;
const router = express.Router();
dotenv.config();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/path", pathsRoute);
app.use("/api/timetable", timetableRoute);
app.use("/api/city", cityRoute);
app.use("/api/user", userRoute);
app.use("/api/usersPhone", usersPhoneRoure);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
