const express = require('express');

const router = express.Router();
const ProductController = require('../controllers/products');

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getProducts);
router.post('/:productId/tickets', ProductController.createTicket);
router.get('/:productId/tickets', ProductController.getProductTickets);


module.exports = router;
