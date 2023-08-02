const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const adminRouter = require("./routes/admin.js");
const shopRouter = require("./routes/shop.js");
const contactRoute = require("./routes/contact.js");
const successRoute = require("./routes/success.js");

const errorControllers = require("./controllers/error.js");

const app = express();

//app.use() -->creates middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
app.use(contactRoute);
app.use(successRoute);

app.use(errorControllers.pageNotFoud);

app.listen(3000, () => {
  console.log("Server is working on the port 3000");
});
