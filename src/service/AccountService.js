const {usersRepository} = require("../persistence/repository");
const {} = require('../persistence/repository/index');

class AccountService {
    async register(RegisterRequest) {

        return await usersRepository.register(data);
    }
}