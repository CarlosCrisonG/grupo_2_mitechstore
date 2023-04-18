module.exports = (sequelize, DataTypes) => {
    const alias = "Product";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(11, 2),
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        highlight: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER(4),
            allowNull: false
        },
        size: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        inSale: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "products"
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categories_id"
        });

        Product.hasMany(models.Image, {
            as: "images",
            foreignKey: "products_id"
        });

        Product.hasMany(models.Feature, {
            as: "features",
            foreignKey: "products_id"
        });

        Product.belongsToMany(models.Color, {
            as: 'colors',
            through: 'colors_has_products',
            foreignKey: 'products_id',
            otherKey: 'colors_id'
        });
    };

    return Product;
}