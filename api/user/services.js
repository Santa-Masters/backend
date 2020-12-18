const Store = require('../../store/store');
const User = require('../../store/models/user');

class UsersService {
  constructor() {
    this.store = new Store(User);
  }

  async getUsers() {
    const users = await this.mongoDb.getAll(this.UserModel);
    return users || [];
  }

  async getUserUid(data) {
    const user = await this.mongoDb.get(data);
    return user || null;
  }

  async createUser({ user }) {
    const { name, nickname, email, profile } = user;
    const createUserId = await this.mongoDb.create(this.UserModel, {
      name,
      nickname,
      email,
      profile,
    });

    return createUserId;
  }

  async getOrCreateuser({ user }) {
    const queriedUser = await this.getUser({ email: user.email });
    if (queriedUser) {
      return queriedUser;
    }

    await this.createUser({ user });
    return await this.getUser({ email: user.email });
  }
}

module.exports = UsersService;
