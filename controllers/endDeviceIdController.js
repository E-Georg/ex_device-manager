const EndDeviceId = require("../models/endDeviceId");

// Kontrollieren einer neuen EndDeviceId
exports.checkEndDevice = async (req, res) => {
  // check req.body of data
  const { customer, country, city, driver, type, year } = req.body;
  try {
    const existingDevices = await EndDeviceId.find({
      customer,
      country,
      city,
      driver,
      type,
      year,
    }).sort({ amount: -1 });

    let amount = 10_001;

    if (existingDevices.length > 0) {
      const highestEndDeviceId = existingDevices[0].amount;
      amount = highestEndDeviceId + 1;
    }

    // Generiere die neue endDeviceId
    const endDeviceId = `${customer}-${country}-${city}-${driver}-${type}-${year}${amount}`;
    console.log("neu generierte endDeviceId", endDeviceId);

    // Erstelle das neue EndDeviceId
    const nextEndDeviceId = {
      customer,
      country,
      city,
      driver,
      type,
      year,
      amount,
      endDeviceId,
    };

    res.status(200).json(nextEndDeviceId);
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ error: err.message });
  }
};

// Erstellen eines neuen EndDeviceId
exports.createEndDevice = async (req, res) => {
  try {
    const newEndDeviceId = new EndDeviceId(req.body);
    const savedDevice = await newEndDeviceId.save();
    res.status(201).json(savedDevice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Abrufen aller EndDeviceIds
exports.getAllEndDevices = async (req, res) => {
  try {
    const devices = await EndDeviceId.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Abrufen eines spezifischen EndDeviceId nach ID
exports.getEndDeviceById = async (req, res) => {
  try {
    const device = await EndDeviceId.findById(req.params.id);
    if (!device) {
      return res.status(404).json({ error: "EndDeviceId nicht gefunden" });
    }
    res.json(device);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Aktualisieren eines EndDeviceId nach ID
exports.updateEndDeviceById = async (req, res) => {
  try {
    const updatedDevice = await EndDeviceId.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDevice) {
      return res.status(404).json({ error: "EndDeviceId nicht gefunden" });
    }
    res.json(updatedDevice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Löschen eines EndDeviceId nach ID
exports.deleteEndDeviceById = async (req, res) => {
  try {
    const deletedDevice = await EndDeviceId.findByIdAndDelete(req.params.id);
    if (!deletedDevice) {
      return res.status(404).json({ error: "EndDeviceId nicht gefunden" });
    }
    res.json({ message: "EndDeviceId erfolgreich gelöscht" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
