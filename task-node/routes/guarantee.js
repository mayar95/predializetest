const express = require('express');

const router = express.Router();
const GuaranteeController = require('../controllers/guarantee');

router.get('/', GuaranteeController.getGuarantee);

module.exports = router;
