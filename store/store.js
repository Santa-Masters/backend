const mongoose = require('mongoose');
const config = require('../config');

const USER = config.database.dbUser;
const PASSWORD = config.database.dbPassword;
const DB_HOST = config.database.dbHost;
const DB_PORT = config.database.dbPort;
const DB_NAME = config.database.dbName;

// const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
console.log(MONGO_URI)
class Store  {
  constructor(model) {
    this.model = model;
    this.handleCon();
  }

  // Singleton implementation to connect database
  handleCon() {
    if (!Store.connection) {
      Store.connection = mongoose
        .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          console.log('[DB] Success contected');
        })
        .catch((reject) => {
          console.log(`[DB] fail contected ${reject}`);
        });
      mongoose.set('useFindAndModify', false);
    }
    return Store.connection;
  }

  async get(query) {
    const listData = await this.model.findById(query);
    return listData;
  }

  async getAll(data,sort) {
    const listData = await this.model.find(data).sort(sort).exec();
    return listData;
  }

  async create(data) {
    const created = await this.model(data).save()
    return created;
  }

  async update(data, query) {
    const updated = await this.model.findByIdAndUpdate(query, data);
    return updated;
  }

  async delete(query) {
    const deleted = await this.model.findByIdAndDelete(query);
    return deleted;
  }
}

module.exports = Store;
