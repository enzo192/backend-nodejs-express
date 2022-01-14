const express = require('express');

const router = express.Router();


router.get('/:categoryId/products/:productId', (req, res) =>{
  const { categoryId, productId } = req.params;
  res.json({
      categoryId,
      productId,
    });
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
