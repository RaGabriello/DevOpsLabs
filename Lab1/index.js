str = "Hello NodeJS";
console.log(str);  // rentrer "node" dans la console passe en mode nodejs

const express = require('express') // lis le module express, require() marche comme un include

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

module.exports = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})