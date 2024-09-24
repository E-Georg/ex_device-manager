const express = require("express");
const router = express.Router();
const endDeviceController = require("../controllers/endDeviceIdController");

// Routen für CRUD-Operationen
router.post("/enddevices", endDeviceController.createEndDevice);
router.post("/enddevices/check", endDeviceController.checkEndDevice);
router.get("/enddevices", endDeviceController.getAllEndDevices);
router.get("/enddevices/:id", endDeviceController.getEndDeviceById);
router.put("/enddevices/:id", endDeviceController.updateEndDeviceById);
router.delete("/enddevices/:id", endDeviceController.deleteEndDeviceById);

module.exports = router;
