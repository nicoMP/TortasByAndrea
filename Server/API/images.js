const express = require("express");
const router = express.Router();


router.get('/', async (req, res) => {
    try {
      res.json({
        images: "sent!"
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err.detail);
    }
  });
module.exports = router;