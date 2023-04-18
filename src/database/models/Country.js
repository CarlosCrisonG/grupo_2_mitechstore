module.exports = (sequelize, DataTypes) => {
    const alias = "Country";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(3),
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "country"
    };

    const Country = sequelize.define(alias, cols, config);

    Country.associate = (models) => {
        Country.hasMany(models.User, {
            as: "users",
            foreignKey: "country_id"
        });
    };

    return Country;
}