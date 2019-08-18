const express = require('express');

const router = express.Router();
const { productService } = require('./../domains');

router.get('/products', (req, res) => {
  const result = productService.getProducts();
  res.send(result);
});


module.exports = router;
