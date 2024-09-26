const Customer = require("../models/customer");

exports.getCustomers = async (req, res) => {
  try {
    const customersList = await Customer.find();

    res.status(200).json(customersList);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createCustomer = async (req, res) => {
  const { customer, tag } = req.body;

  try {
    const newCustomer = await new Customer({
      customer,
      tag,
    }).save();

    if (!newCustomer) {
      return res.status(404).json({ message: "Customer not created." });
    }

    console.log("newCustomer", newCustomer);

    res.status(200).json({ message: "Customer created.", newCustomer });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { customer, tag } = req.body; // Die neuen Daten aus dem Request Body

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { customer, tag },
      { new: true, runValidators: true } // Option `new: true` gibt das aktualisierte Dokument zurück
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found." });
    }

    res
      .status(200)
      .json({ message: "Customer updated successfully", updatedCustomer });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);

    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found." });
    }

    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
