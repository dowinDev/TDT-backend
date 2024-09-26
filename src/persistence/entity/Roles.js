'use strict';

module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
    }, {
        tableName: 'roles',
        timestamps: false,
        paranoid: false,
    });

    Roles.associate = function (models) {
        Roles.hasMany(models.Accounts, {foreignKey: 'role_id'});
    }
    return Roles;
}
