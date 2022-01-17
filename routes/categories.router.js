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
  const newCategorie = service.create(body);
  res.status(201).json(newCategorie);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const categorie = service.update(id, body);
  res.json(categorie);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
