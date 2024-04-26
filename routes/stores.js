const router = require("express").Router();

const storescontroller = require("../controllers/stores-controllers");

//GET List of all stores
router.route("/").get(storescontroller.getAllStores);

//GET a single store
router.route("/:id").get(storescontroller.getStorebyId);

//POST/ CREATE store
router.route("/").post(storescontroller.addStore);

module.exports = router;
