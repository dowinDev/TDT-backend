'use strict';

class UsersResponse {
    constructor(id, username, email, phone, role_id){
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.role_id = role_id;
    }
}

module.exports = UsersResponse;