const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/user.route.js");
const orderRoute = require("./routes/order.route.js");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://haris2iftikhar:GClTzr15XhkjvN6k@backenddb.nrurtot.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });