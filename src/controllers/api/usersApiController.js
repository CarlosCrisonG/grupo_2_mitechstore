const db = require('../../database/models');

const controller = {
    list: async (req, res) => {
        try {
            let limit = 10;
            let page = parseInt(req.query.page) || 1;
            let offset = limit * (page - 1);

            let usersFromDb = await db.User.findAll({ limit, offset,
                attributes: { exclude: ["password", "country_id", "userprofile_id", "phone", "region", "city", "zip", "address"] },
                include: [
                    { association: "userProfile" },
                    { association: "country" }
                ]
            });
            
            let totalUsersInDB = await db.User.count();

            let pagesAmmount = Math.ceil(totalUsersInDB / limit)

            if (usersFromDb.length < 1 || page > pagesAmmount) {
                return res.status(404).json({
                    meta: {
                        status: 404
                    },
                    data: "Users not found"
                })
            }

            let data = usersFromDb.map(user => ({
                ...user.dataValues,
                detail: `http://localhost:3000/api/users/${user.dataValues.id}`
            }))


            let response = {
                meta: {
                    status: 200,
                    url: req.originalUrl,
                    count: totalUsersInDB,
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