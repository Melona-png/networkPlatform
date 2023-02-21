//mongoose connection
const { connect, connection } = require('mongoose');

//db connection
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/networkPlatform';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
module.exports = connection;
  
