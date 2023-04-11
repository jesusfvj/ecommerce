const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
const { addUser, getUser, deleteUser, updateUser } = require("./controllers/userData");

const app = express();

app.use(cors());

require("dotenv").config();

dbConnection();

app.use(express.json());

app.post("/adduser", addUser);
app.get("/getuser", getUser);
app.delete("/deleteuser/:id", deleteUser);
app.put("/updateuser", updateUser);

app.listen(process.env.PORT, () => {
  console.log(`Serving on port ${process.env.PORT}`);
});