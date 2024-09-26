'use strict';

module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define('Accounts', {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
                name: "username",
            },
        },
        {
            tableName: "accounts",
            timestamps: true,
            paranoid: true

        });
    Accounts.associate = function (models) {
        Accounts.belongsTo(models.Roles, {foreignKey: 'role_id'});
        Accounts.belongsTo(models.Users, {foreignKey: 'user_id'});
    }
    return Accounts;
}