const db = require('../../database/models');

const controller = {
    list: async (req, res) => {
        try {
            let limit = 10;
            let page = parseInt(req.query.page) || 1;
            let offset = limit * (page - 1);

            let usersFromDb = await db.User.findAll({
                attributes: { exclude: ["password", "country_id", "userprofile_id", "phone", "region", "city", "zip", "address"] }
            });

            let userPaging = usersFromDb.slice(offset, offset + limit)

            let data = userPaging.map(user => ({
                ...user.dataValues,
                detail: `/api/users/${user.dataValues.id}`
            }))

            let response = {
                meta: {
                    status: 200,
                    count: usersFromDb.length,
                    url: req.originalUrl,
                    limit,
                    page
                },
                data
            }
            
            if (!(data.length < limit)) {
                response.meta.next = `/api/users?page=${page + 1}`
            }

            if (page > 1) {
                response.meta.previous = `/api/users?page=${page - 1}`
            }
            
            res.json(response)

        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    },
    detail: async (req, res) => {
        try {
            let user = await db.User.findByPk(req.params.id, {
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