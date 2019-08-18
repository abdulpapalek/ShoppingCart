const express = require('express');

const router = express.Router();
const { cartService } = require('../domains');

router.post('/cart', (req, res) => {
  const result = cartService.addProduct(req.query.name);
  res.send(result);
});

router.delete('/cart', (req, res) => {
  const result = cartService.deleteProduct(req.query.name);
  res.send(result);
});

router.get('/cart', (req, res) => {
  const result = cartService.getProducts();
  res.send(result);
});

module.exports = router;
