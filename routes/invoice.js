const express = require("express");
const {
  generateInvoice,
  allInvoice,
  searchInvoice,
  salesReport,
  updateInvoice,
} = require("../controllers/invoice");
const { auth, authGetInvoice } = require("../config/authentication");
const router = express.Router();

router.post("/generate", auth, generateInvoice);
router.get("/getallinvoice", auth, allInvoice);
router.get("/search/:id", auth, searchInvoice);
router.get("/sales", auth, salesReport);
router.patch("/update/:id", auth, updateInvoice);
module.exports = router;
