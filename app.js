const express = require("express");
const app = express();
const connectDb = require("./config/database");
const router = require("./routers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

router(app);

app.listen(3001, () => {
  console.log("Sever run at PORT " + 3001);
});
