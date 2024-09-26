const express = require("express");
const router = express.Router();

const customer = require("../controllers/customerController");

// GET /api/customers
router.get("/", customer.getCustomers);

router.post("/", customer.createCustomer);

router.put("/:id", customer.updateCustomer);

router.delete("/:id", customer.deleteCustomer);

module.exports = router;
