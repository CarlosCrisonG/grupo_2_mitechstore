const db = require('../../database/models');

const controller = {
    list: async (req, res) => {
        try {
            let usersFromDb = await db.User.findAll({
                attributes: { exclude: ["password", "country_id", "userprofile_id"] },
                include: [
                    { association: "userProfile" },
                    { association: "country" }
                ]
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
    }
}

module.exports = controller;