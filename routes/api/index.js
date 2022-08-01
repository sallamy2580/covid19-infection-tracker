const router = require("express").Router()
const markerRoutes = require("./marker")


router.use("/marker", markerRoutes)

module.exports =router