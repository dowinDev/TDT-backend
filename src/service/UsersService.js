const {usersRepository} = require('../persistence/repository/index');

class UserService {
    async createUser(data) {
        return await usersRepository.createPost(data);
    }

    async getUserById(id) {
        return await usersRepository.getUserById(id);
    }

    async getAllUsers() {
        return await usersRepository.getAllUsers();
    }

    async updateUser(id, data) {
        return await usersRepository.updateUser(id, data);
    }

    async deleteUser(id) {
        return await usersRepository.deleteUser(id);
    }
}

module.exports = new UserService();
