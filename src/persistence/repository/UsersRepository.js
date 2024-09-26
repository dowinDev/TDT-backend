'';

const Users = require('../entity/Users');

class UsersRepository {
    async createPost(data) {
        return Users.create(data);
    }

    async getPostById(id) {
        return await Users.findByPk(id);
    }

    async getAllUsers() {
        return "hello, world!";
    }

    async updatePost(id, data) {
        return await Users.update(data, { where: { id } });
    }

    async deletePost(id) {
        return await Users.destroy({ where: { id } });
    }

    async register(data) {
       return Users.create(data);
    }
}

module.exports = new UsersRepository();
