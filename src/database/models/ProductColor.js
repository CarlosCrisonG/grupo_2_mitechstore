module.exports = (sequelize, DataTypes) => {
    const alias = "ProductColor";

    const cols = {
        colors_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        products_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    };

    const config = {
        timestamps: false,
        tableName: "colors_has_products"
    };

    const ProductColor = sequelize.define(alias, cols, config);

    return ProductColor;
}