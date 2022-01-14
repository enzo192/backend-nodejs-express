const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { //http://localhost:3000/users?limit=10&offset=200
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('no hay parametros');
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    id,
    message: 'update',
    data: body
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    message: 'deleted',
  });
});


module.exports = router;
