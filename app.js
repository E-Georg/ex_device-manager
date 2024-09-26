const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const endDeviceIdRoutes = require("./routes/endDeviceIdRoutes");
const customerRoutes = require("./routes/customerRoutes");

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = `${process.env.MONGO_DB_HOST}/device-manager`;

// Middleware zum Parsen von JSON
app.use(express.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB verbunden");
    app.listen(port, () => {
      console.log(`Server is running on Port:${port}`);
    });
  })
  .catch((err) => {
    console.error(`MongoDB-Verbindungsfehler:${err}`);
    process.exit(1);
  });

app.use("/api/enddevices", endDeviceIdRoutes);
app.use("/api/customers", customerRoutes);
