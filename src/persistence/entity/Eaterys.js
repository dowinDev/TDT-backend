'use strict';

module.exports = (sequelize, DataTypes) => {
    const Eatery = sequelize.define('Eatery', {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                name: "name",
            },
            location: {
                type: DataTypes.STRING,
                name: "location",
            },
            phone: {
                type: DataTypes.STRING,
                size: 10,
                name: "phone",
            },
        },
        {
            tableName: "eatery",
            timestamps: true,
            paranoid: true
        });
    Eatery.associate = function (models) {
        Eatery.belongsTo(models.Users, {foreignKey: 'user_id'});
        Eatery.hasMany(models.Products, {foreignKey: 'eatery_id'});
        Eatery.hasMany(models.FeedBacks, {foreignKey: 'eatery_id'});
    }
    return Eatery;
}