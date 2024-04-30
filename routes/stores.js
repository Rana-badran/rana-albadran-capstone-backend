const router = require("express").Router();

const storescontroller = require("../controllers/stores-controllers");

//GET List of all stores
router.route("/").get(storescontroller.getAllStores);

//GET stores based on category
router.route("/filter").get(storescontroller.getFilteredStores);

//POST/ CREATE store
router.route("/").post(storescontroller.addStore);

module.exports = router;
