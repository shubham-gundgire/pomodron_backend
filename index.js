const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const connectToDB = require("./config/dbconnect");
const auth = require("./routes/auth");
const user = require("./routes/user");
const app = express();
const cors = require("cors");

//connection to database
connectToDB();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/auth", auth);

app.use("/user", user);

app.listen(process.env.PORT, () => {

  console.log("Server started on port : " + process.env.PORT);
  
});
