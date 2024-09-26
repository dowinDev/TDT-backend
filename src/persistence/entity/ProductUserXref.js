'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductUserXref = sequelize.define('ProductUserXref', {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            quantity: {
                type: DataTypes.INTEGER,
                name: "quantity",
            },
        },
        {
            tableName: "product_user_xref",
            timestamps: false,
            paranoid: false
        });
    ProductUserXref.associate = function (models) {
        ProductUserXref.belongsTo(models.Users, {foreignKey: 'user_id'});
        ProductUserXref.belongsTo(models.Products, {foreignKey: 'product_id'});
    }
    return ProductUserXref;
}