const Path = require('../models/Paths')
const City = require("../models/City");
class PathsController {
    constructor() {
    }
    getById = async (req, res) => {
        try {
            const path = await Path.findOne({
                attributes: {
                    exclude: ["createdAt", "updatedAt", "cityFrom", "cityTo"]
                },
                include: [
                    {
                        model: City,
                        as: 'toCity',
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        }
                    },
                    {
                        model: City,
                        as: 'fromCity',
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        }
                    }
                ],
                where: {
                    id: req.params.id
                }
            })
            res.send({path})
        } catch (err) {
            console.log(err)
        }
    }
    getAll = async (req, res) => {
        try {
            const paths = await Path.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt", "cityFrom", "cityTo"]
                },
                include: [
                    {
                        model: City,
                        as: 'fromCity',
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        }
                    },
                    {
                        model: City,
                        as: 'toCity',
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        }
                    }
                ]
            })
            res.send({paths})
        } catch (err) {
            console.log(err)
        }
    }
    create = async (req, res) => {
        try {
            const path = await Path.create({
                name: req.body.name,
                cityFrom: req.body.cityFrom,
                cityTo: req.body.cityTo,
                price: req.body.price
            })
            res.send({path})
        } catch (err) {
            console.log(err)
        }
    }
}

const pathsController = new PathsController()
module.exports = pathsController


