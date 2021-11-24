const express = require('express');
const router = express.Router();
const data = require('../data');
const stocksData = data.stocks;

router.get('/:id', async (req, res) => {
  try {
    const stocks = await stocksData.getStockById(req.params.id);
    res.json(stocks);
  } catch (e) {
    res.status(404).json({ message: 'Stock not found' });
  }
});
router.get('/', async (req, res) => {
    try {
      const stocks = await stocksData.getStock();
      res.json(stocks);
    } catch (e) {
      res.status(404).json({ message: 'stocks data not found' });
    }
  });

  module.exports = router;