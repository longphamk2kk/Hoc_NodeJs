const express = require("express");
const router = express.Router();

const {
  createAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
} = require("../controllers/accountController");

router.route("/").post(createAccount).get(getAccounts);

router.route("/:id").patch(updateAccount).delete(deleteAccount);
module.exports = router;
