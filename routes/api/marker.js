const router = require("express").Router();
const markerController = require("../../controller/marker-controller")

router.route("/")
.get(markerController.findAll)
.post(markerController.create)


module.exports = router