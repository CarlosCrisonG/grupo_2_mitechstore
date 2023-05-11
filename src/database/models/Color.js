module.exports = (sequelize, DataTypes) => {
    const alias = "Color";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "colors"
    };

    const Color = sequelize.define(alias, cols, config);

    Color.associate = function (models) {
        Color.belongsToMany(models.Product, {
            as: 'products',
            through: 'colors_has_products',
            foreignKey: 'colors_id',
            otherKey: 'products_id',
            timestamps: false
        });
    };

    return Color;
}