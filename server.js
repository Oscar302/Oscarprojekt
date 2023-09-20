
const express = require("express");

const app = express();
const port = 4000

app.get('/', (req, res) =>  {
  res.send("Hello Mate!")
  }
  )

app.listen(port, () => {
console.log(`Server open on port ${port}`);
});

