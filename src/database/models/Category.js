module.exports = (sequelize, DataTypes) => {
    const alias = "Category";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "categories"
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "categories_id"
        })
    };

    return Category;
}