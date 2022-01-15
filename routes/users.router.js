const express = require('express');

const UsersService = require('./../services/users.service');

const router = express.Router();

const service = new UsersService();

router.get('/', (req, res) => { //http://localhost:3000/users?limit=10&offset=200
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  const users = service.findOne(id);
  res.json(users);
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
