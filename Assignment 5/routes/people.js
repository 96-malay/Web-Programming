const express = require('express');
const router = express.Router();
const data = require('../data');
const peopleData = data.people;

router.get('/:id', async (req, res) => {
  try {
    const people = await peopleData.getPersonById(req.params.id);
    res.json(people);
  } catch (e) {
    //res.status(404).json({ message: 'Person not found' });
    res.status(e[0]).json({ message: e[1] });
  }
});
router.get('/', async (req, res) => {
    try {
      const people = await peopleData.getPeopleData(req.params.id);
      res.json(people);
    } catch (e) {
      res.status(e[0]).json({ message: e[1] });
    }
  });

  module.exports = router;