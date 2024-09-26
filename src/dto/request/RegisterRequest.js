class RegisterRequest {
    constructor(user) {
        this.username = user.username;
        this.phone = user.phone;
    }
}

module.exports = RegisterRequest;
