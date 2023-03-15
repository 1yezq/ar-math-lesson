const app = require('./app');
const config = require('./config/config');

// 启动服务器，监听指定的端口
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
