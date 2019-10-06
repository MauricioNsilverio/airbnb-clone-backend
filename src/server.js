const express = require('express');

const app = express();

// GET, POST, PUT, DELETE

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)

app.use(express.json()); // para o express entender o JSON

app.post('/users', (req, res) => {
  return res.json(req.body); // já é um JSON, então pode ser retornado direto
});

app.listen(3333);