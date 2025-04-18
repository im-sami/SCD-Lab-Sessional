const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

mongoose.connect("mongodb://localhost:27017/SCD-Lab-Sessional");

const app = express();
const port = 3001;

const MenuItem = mongoose.model("menu", {
  name: String,
  price: Number,
  stock: Number,
});

app.post("/menu/:name/:price/:stock/", async (req, res) => {
  const menu_item = new MenuItem(req.params);
  await menu_item
    .save()
    .then(() => console.log("Menu Item created " + JSON.stringify(req.params)));
  res.send(JSON.stringify(menu_item));
});

app.get("/menu/:name", async (req, res) => {
  const menu_item = await MenuItem.find(req.params);
  res.send(JSON.stringify(menu_item));
});

app.put("/menu/:name/:stock", async (req, res) => {
  await MenuItem.findOneAndUpdate(
    { name: req.params.name },
    { stock: req.params.stock }
  );
});

app.listen(port, () => {
  console.log(`Menu Service listening on port ${port}`);
});
