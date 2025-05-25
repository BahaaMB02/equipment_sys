require('dotenv').config(); 
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = callback => {
  MongoClient.connect(process.env.MONGO_URI)
    .then(client => {
      console.log('Connected!');
      db = client.db("eq_db"); //here you can use db variable to access the database
      callback();
    })
    .catch(err => {
      console.log(err);
    });
};

const getDb = () => {
  if (db) {
    return db;
  }
  throw 'No database found!';
};

module.exports = {
  mongoConnect: mongoConnect,
  getDb: getDb
};
