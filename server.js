const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require('express-fileupload');

var path = require('path');
global.appRoot = path.resolve(__dirname);

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload());

app.use(express.static(__dirname + '/dist'));

app.use('/static', express.static('public'));

const db = require("./app/models");

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
require("./app/routes/prospecto.rutes")(app);
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});


const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
