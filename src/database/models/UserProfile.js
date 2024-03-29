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
        tableName: "userprofile"
    };

    const UserProfile = sequelize.define(alias, cols, config);

    UserProfile.associate = (models) => {
        UserProfile.hasMany(models.User, {
            as: "users",
            foreignKey: "userprofile_id"
        });
    };

    return UserProfile;
}