'use strict';

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            name: {
                type: "varchar",
                name: "name",
            },
            expirationDate: {
                type: "date",
                name: "expiration_date",
            },
            quantity: {
                type: "int",
                name: "quantity",
            },
            contact: {
                type: "varchar",
                name: "contact",
            },
            price: {
                type: "int",
                name: "price",
            },
            description: {
                type: "text",
                name: "description",
            },
        },
        {
            tableName: "products",
            timestamps: false,
            paranoid: false
        });
    Products.associate = function (models) {
        Products.belongsTo(models.Eatery, {foreignKey: 'eatery_id'});
        Products.hasMany(models.ProductUserXref, {foreignKey: 'product_id'});
    }
    return Products;
}