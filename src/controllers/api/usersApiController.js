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

            if (usersFromDb.length < 1) {
                return res.status(404).json({
                    meta: {
                        status: 404
                    },
                    data: "There are no users in data base"
                })
            }

            let pagesAmmount = Math.ceil(usersFromDb.length / limit)

            if (page > pagesAmmount) {
                return res.status(404).json({
                    meta: {
                        status: 404
                    },
                    data: `This page is empty, please return to page ${pagesAmmount}, which is the last page`
                })
            }

            let userPaging = usersFromDb.slice(offset, offset + limit)

            let data = userPaging.map(user => ({
                ...user.dataValues,
                detail: `http://localhost:3000/api/users/${user.dataValues.id}`
            }))

            let response = {
                meta: {
                    status: 200,
                    url: req.originalUrl,
                    count: usersFromDb.length,
                    limit,
                    total_pages: pagesAmmount,
                    page
                },
                data
            }

            if (page < pagesAmmount) {
                response.meta.next = `http://localhost:3000/api/users?page=${page + 1}`
            }

            if (page > 1) {
                response.meta.previous = `http://localhost:3000/api/users?page=${page - 1}`
            }

            res.status(200).json(response)

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

            if (!user) {
                return res.status(404).json({
                    meta: {
                        status: 404
                    },
                    data: "User not found in data base"
                })
            }

            res.status(200).json({
                meta: {
                    status: 200,
                    url: req.originalUrl
                },
                data: { ...user.dataValues, avatarURL: `http://localhost:3000/images/avatars/${user.dataValues.avatar}` }

            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    }
}

module.exports = controller;