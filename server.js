
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = 3001

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let id = 0;
const db = [{id: 1, username : "Oscar", password : "test", email : "hej.com"}];

app.get("/", (req, res) => {
  res.send("Hello World");
})
.post('/create-user', (req, res) => {
  let payload = req.body;
  console.log(payload);
  db.push(payload);
  res.send(db);
})
.get("/:id", (req, res) => {
  
})
.delete("/:id", (req, res) =>{
})

app.listen(port, () => {
  console.log(`Server open on port ${port}`);
});
 