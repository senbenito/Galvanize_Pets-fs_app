var express = require('express');
var app = express();

app.post('/pets', (req, res, next) => {
  var species = req.body.species;

  knex('pets')
  .insert({species: species});

  res.send(species);
});

app.patch('/pets/:id', (req, res, next)=>{
  var pets_id = req.params.id;
});
