const express = require('express');

const CategoriesService = require('./../services/categories.service');

const router = express.Router();

const service = new CategoriesService();


// router.get('/:categoryId/products/:productId', (req, res) =>{
//   const { categoryId, productId } = req.params;
//   res.json({
//       categoryId,
//       productId,
//     });
// });

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  const categories = service.findOne(id);
  res.json(categories);
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
