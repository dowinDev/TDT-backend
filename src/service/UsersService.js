const userRepository = require('../persistence/repository/usersRepository');

class UserService {
    async createUser(data) {
        return await userRepository.createPost(data);
    }

    async getUserById(id) {
        return await userRepository.getUserById(id);
    }

    async getAllUsers() {
        return await userRepository.getAllUsers();
    }

    async updateUser(id, data) {
        return await userRepository.updateUser(id, data);
    }

    async deleteUser(id) {
        return await userRepository.deleteUser(id);
    }
}

module.exports = new UserService();
