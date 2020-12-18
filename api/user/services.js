const mongoose = require("mongoose");
const Store = require("../../store/store");
const User = require("../../store/models/user");
class UsersService {
  constructor() {
    this.store = new Store(mongoose.model("User", User));
  }

  async getUsers() {
    const users = await this.mongoDb.getAll(this.UserModel);
    return users || [];
  }

  // async getUser({ email }) {
  //   const [user] = await this.mongoDb.getAll(this.AuthModel, { email });
  //   return user;
  // }

  async getUserUid(data) {
    const user = await this.mongoDb.get(data);
    return user || null;
  }

  /**
   * Create a user, this operate over two models
   * to implement a security layer at querys login
   */
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
