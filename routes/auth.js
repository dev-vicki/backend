const express = require("express");
const router = express.Router();


const signout = (req, res) => {
  res.json({
      message: "User SignOut Success!"
  });
};
router.get("/signout", signout);

module.exports = router;