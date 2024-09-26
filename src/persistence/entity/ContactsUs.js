'use strict';

module.exports = (sequelize, DataTypes) => {
    const contactUs = sequelize.define('ContactsUs', {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            messages: {
                type: DataTypes.STRING,
                name: "messages",
            },
        },
        {
            tableName: "contacts_us",
            timestamps: false,
            paranoid: false

        });
    contactUs.associate = function (models) {
        contactUs.belongsTo(models.Users, {foreignKey: 'user_id'});
    }
    return contactUs;
}
