module.exports = (sequelize, DataTypes) => {
    const alias = "Feature";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "Feature"
    };

    const Feature = sequelize.define(alias, cols, config);

    Feature.associate = (models) => {
        Feature.belongsTo(models.Product, {
            as: "product",
            foreignKey: "products_id"
        })
    };

    return Category;
}