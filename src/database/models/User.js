module.exports = (sequelize, DataTypes) => {
    const alias = "User";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        avatar: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'defaultUser.jpg'
        },
        region: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    };

    const config = {
        timestamps: false,
        tableName: "users"
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}