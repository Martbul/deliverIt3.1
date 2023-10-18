const router = require("express").Router();
const orderService = require("../services/orderService");
const {isAuth} = require('./../middlewares/authMiddleware');


router.get("/", (req, res) => {
  res.render("index");
});


router.get("/beADeliver",isAuth, (req, res) => {
  res.render("beADeliver");
});

router.get("/learnMore", (req, res) => {
  res.render("learnMore");
});

router.get("/binds", isAuth,async (req, res) => {
  const { search, from, to } = req.query;
  const orders = await orderService.getAll(search, from, to);

  res.render("binds", { orders, search, from, to });
});

router.get("/about", (req, res) => {
  res.render("about");
});


router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
