var express = require('express');
var app = express();
var cors = require('cors');

const mongoose = require('mongoose');
const defaultRoutes = require('./routes/default');
const apiRoutes = require('./routes/api');
const multer = require('multer');
const uri = process.env.MONGODB_URI;
let port = process.env.PORT;

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, file.filename + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('upfile')
);

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));
app.use('/', defaultRoutes);
app.use('/api', apiRoutes);

listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
