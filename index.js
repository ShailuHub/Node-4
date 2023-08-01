const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin.js");
const shopRouter = require("./routes/shop.js");

const app = express();

//app.use() -->creates middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>OOps!! page not found</h1>");
});

app.listen(3000, () => {
  console.log("Server is working on the port 3000");
});
