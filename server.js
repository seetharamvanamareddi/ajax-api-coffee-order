const express = require("express");
const ourApp = express();
const path = require("path");

ourApp.use(express.urlencoded({ extended: false }));
ourApp.use(express.static(path.join(__dirname, "/script.js")));
// ourApp.use(express.static("/script.js"));

ourApp.set("view engine", "ejs");
ourApp.set("views", path.join(__dirname, "views"));

ourApp.get("/", function (req, res) {
  res.render("home", {
    orders: [
      { name: "James", drink: "Coffee" },
      { name: "John", drink: "Latte" },
    ],
  });
});
ourApp.get("/api/orders", function (req, res) {
  res.json([
    { name: "James", drink: "Coffee" },
    { name: "John", drink: "Latte" },
  ]);
});

ourApp.listen(3000);
