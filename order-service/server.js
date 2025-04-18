const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SCD-Lab-Sessional");

const app = express();
const port = 3002;

const Order = mongoose.model("Order", {
  name: String,
  item1: String,
  item2: String,
});

app.post("/orders/:name/:item1/:item2/", async (req, res) => {
  const order = new Order(req.params);
  order
    .save()
    .then(() => console.log("Order created " + JSON.stringify(req.params)));
  await axios.put(
    "http://localhost:3000/customers/update-points/" +
      request.params.name +
      "/" +
      10
  );
  res.send(JSON.stringify(req.params));
});

app.get("/cars/:car_id", async (req, res) => {
  const car = await Car.findOne(req.params);
  res.send(JSON.stringify(car));
});

app.put("/cars/:car_id/:is_available", async (req, res) => {
  const car = await Car.findOneAndUpdate(
    { car_id: req.params.car_id },
    { is_available: req.params.is_available }
  );

  res.send(JSON.stringify(car));
});

app.listen(port, () => {
  console.log(`Car Service listening on port ${port}`);
});
