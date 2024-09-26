const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const endDeviceController = require("../controllers/endDeviceIdController");

// Routen für CRUD-Operationen
router.post("/", endDeviceController.createEndDevice);
router.get("/", endDeviceController.getAllEndDevices);
router.get("/:id", endDeviceController.getEndDeviceById);
router.put("/:id", endDeviceController.updateEndDeviceById);
router.delete("/:id", endDeviceController.deleteEndDeviceById);

// Überprüfen der key daten
router.post(
  "/check",
  [
    check("customer").isString().notEmpty(),
    check("country").isString().notEmpty(),
    check("city").isString().notEmpty(),
    check("driver").isString().notEmpty(),
    check("type").isString().notEmpty(),
    check("year").isString().notEmpty(),
  ],
  endDeviceController.checkEndDevice
);

module.exports = router;
