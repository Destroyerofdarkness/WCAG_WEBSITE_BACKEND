const router = require("express").Router();

const controller = require("../controllers/default_controllers.js")

router.get("/get-cats", controller.send_out_cats)

router.get("/cat/:name", controller.send_cat_info)

module.exports = router