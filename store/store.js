class MysqlLib {
  constructor(model) {
    this.model = model;
  }

  async get(query) {
    const item = await this.model.findOne({
      where: query,
    });
    return item;
  }

  async getAll(query) {
    const listData = await this.model.findAll({
      where: query,
    });
    return listData;
  }

  async create(data) {
    const created = await this.model.create(data);
    return created;
  }

  async update(data, query) {
    const updated = await this.model.update(data, {
      where: query
    });
    return updated;
  }

  async delete(query) {
    const deleted = await this.model.destroy({
      where: query
    });
    return deleted;
  }
}

module.exports = MysqlLib;
