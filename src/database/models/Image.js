module.exports = (sequelize, DataTypes) => {
    const alias = "Image";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'defaultProduct.png'
        }
    };

    const config = {
        timestamps: false,
        tableName: "images"
    };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = (models) => {
        Image.belongsTo(models.Product, {
            as: "product",
            foreignKey: "products_id"
        });
    };

    return Image;
}