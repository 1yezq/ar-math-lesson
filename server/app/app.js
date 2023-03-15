const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const lessonRouter = require('./routes/lesson');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// 连接 MongoDB 数据库
mongoose.connect(config.mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 连接成功
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

// 连接失败
mongoose.connection.on('error', (err) => {
  console.log(`MongoDB error: ${err}`);
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


// 挂载路由
app.use('/api/lesson', lessonRouter);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
