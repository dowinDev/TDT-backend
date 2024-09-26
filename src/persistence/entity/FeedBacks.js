'use strict';

module.exports = (sequelize, DataTypes) => {
    const FeedBacks = sequelize.define('FeedBacks', {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            message: {
                type: DataTypes.STRING,
                name: "message",
            },
            rating: {
                type: DataTypes.INTEGER,
                name: "rating",
            },
        },
        {
            tableName: "feedbacks",
            timestamps: false,
            paranoid: false

        });
    FeedBacks.associate = function (models) {
        FeedBacks.belongsTo(models.Users, {foreignKey: 'user_id'});
        FeedBacks.belongsTo(models.Eatery, {foreignKey: 'eatery_id'});
    }
    return FeedBacks;
}