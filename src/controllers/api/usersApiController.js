const db = require('../../database/models');

const controller = {
    list: async (req, res) => {
        try {
            let usersFromDb = await db.User.findAll({
                attributes: { exclude: ["password", "country_id", "userprofile_id", "phone", "region", "city", "zip", "address"] }
            });

            let data = usersFromDb.map(user => ({
                ...user.dataValues,
                detail: `/api/users/${user.id}`
            }))

            res.json({
                meta: {
                    status: 200,
                    count: usersFromDb.length,
                    url: req.originalUrl
                },
                data: data
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    },
    detail: async (req, res) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: req.params.id
                },
                attributes: { exclude: ["password", "country_id", "userprofile_id"] },
                include: [
                    { association: "userProfile" },
                    { association: "country" }
                ]
            })
            res.json({
                meta: {
                    status: 200,
                    url: req.originalUrl
                },
                data: { ...user.dataValues, avatarURL: `/images/avatars/${user.dataValues.avatar}` }

            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    }
}

module.exports = controller;