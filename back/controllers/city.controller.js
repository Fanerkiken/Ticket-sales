const City = require('../models/City')
class  CityController {
    constructor() {
    }

    getById = async (req, res) => {
        try {
            const city = await City.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.send({city})
        } catch (err) {
            console.log(err)
        }
    }
    getAll = async (req, res) => {
        try {
            console.log(req.user)
            const cities = await City.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
            })
            res.send({cities})
        } catch (err) {
            console.log(err)
        }
    }
    create = async (req, res) => {
        try {
            const city = await City.create({
                name: req.body.name,
                code: req.body.code,
            })
            res.send({city})
        } catch (err) {
            console.log(err)
        }
    }
}

const cityController = new CityController()
module.exports = cityController