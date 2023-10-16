const router = require("express").Router();

const homeController = require("./controllers/homeController");
const orderController = require("./controllers/orderController");
const userController = require("./controllers/userController");
const deliverController = require("./controllers/deliverController");

router.use(homeController);
router.use("/orders", orderController);
router.use("/users", userController);
router.use('/delivers',deliverController)

// router.get("*", (req, res) => {
//   res.redirect("/404");
// });

module.exports = router;
