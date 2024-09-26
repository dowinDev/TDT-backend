'use strict';

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('Users', {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            userName: {
                type: DataTypes.STRING,
                name: "username",
            },
            password: {
                type: DataTypes.STRING,
                name: "password",
            },
            firstName: {
                type: DataTypes.STRING,
                name: "first_name",
            },
            lastName: {
                type: DataTypes.STRING,
                name: "last_name",
            },
            source: {
                type: DataTypes.STRING,
                name: "source",
            },
            avatar: {
                type: DataTypes.STRING,
                name: "avatar",
            },
            phone: {
                type: DataTypes.STRING,
                name: "phone",
            },
            address: {
                type: DataTypes.STRING,
                name: "address",
            },
            secretKey: {
                type: DataTypes.STRING,
                name: "secret_key",
            },
            resetKey: {
                type: DataTypes.STRING,
                name: "reset_key",
            },
            birthDay: {
                type: DataTypes.DATE,
                name: "birth_day",
            },
            email: {
                type: DataTypes.STRING,
                name: "email",
            },
        },
        {
            tableName: "users",
            timestamps: true,
            paranoid: true

        });
    users.associate = function (models) {
        users.hasMany(models.Accounts, {foreignKey: 'user_id'});
        users.hasMany(models.Eatery, {foreignKey: 'user_id'});
        users.hasMany(models.FeedBacks, {foreignKey: 'user_id'});
        users.hasMany(models.ContactsUs, {foreignKey: 'user_id'});
        users.hasMany(models.ProductUserXref, {foreignKey: 'user_id'});
    }
    return users;
}