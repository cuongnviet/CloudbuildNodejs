const express = require('express')
const app = express()
const calculatorService = require('./services/calculator');

app.get('/', function (req, res) {
  const numberOne = req.query.numberOne;
  const numberTwo = req.query.numberTwo;

  const result = calculatorService.sum(Number(numberOne), Number(numberTwo));

  res.send(`You result is ${result}`);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))