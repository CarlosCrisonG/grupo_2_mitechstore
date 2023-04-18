module.exports = (sequelize, DataTypes) => {
    const alias = "UserProfile";

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
        tableName: "userProfile"
    };

    const UserProfile = sequelize.define(alias, cols, config);

    return UserProfile;
}