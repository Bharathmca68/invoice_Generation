const express = require("express");
const mongoose = require("mongoose");
const logger = require("./util/logger");
const userRoutes = require("./routes/user");
const invoiceRoutes = require("./routes/invoice");
const { initialilizing } = require("./controllers/users");
const pdf = require("html-pdf");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.set("view engine", "ejs");

app.use("/user", userRoutes);
app.use("/invoice", invoiceRoutes);
app.get("/generateDefaultSadmin", initialilizing);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.mongoDB_Connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((success) => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`server runnig on ${PORT}`);
      logger.log("info", `server runnig on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Cannot connect to MongoDB: " + error);
  });
