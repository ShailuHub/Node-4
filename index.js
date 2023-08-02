const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const adminRouter = require("./routes/admin.js");
const shopRouter = require("./routes/shop.js");
const rootDir = require("./util/path.js");

const app = express();

//app.use() -->creates middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Server is working on the port 3000");
});
