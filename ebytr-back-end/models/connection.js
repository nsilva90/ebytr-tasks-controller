const { MongoClient } = require('mongodb');

// Endereço para conexão com o banco de dados local:
const MONGO_DB_URL = 'mongodb://localhost:27017/TasksController';

const DB_NAME = 'TasksController';

const mongodbConnection = () =>
    MongoClient.connect(MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((connection) => connection.db(DB_NAME))
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });

module.exports = mongodbConnection;
