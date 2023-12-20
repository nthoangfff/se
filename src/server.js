const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const fileUpload = require("express-fileupload");
const mongo = require("./config/db"); // Assuming mongo exports the MongoDB connection
const cors = require('cors')
const productRoutes = require("./routings/product");
const userRoutes = require("./routings/user");
const orderRoutes = require("./routings/order");

const production = process.env.NODE_ENV === "production";

 

 
require("dotenv").config();

const app = express();

// Serve static files in production
production && app.use(express.static(path.join(__dirname, "../../client/build")));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Establish MongoDB connection
mongo.connectDB();

app.use("/products", productRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);

// Serve the React app in production
production && (
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
