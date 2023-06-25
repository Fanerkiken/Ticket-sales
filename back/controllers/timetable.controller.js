const Timetable = require("../models/Timetable")
const Paths = require("../models/Paths");
const City = require("../models/City");

class  TimetableController {
    constructor() {
    }

    getById = async (req, res) => {
        try {
            const timetable = await Timetable.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.send({timetable})
        } catch (err) {
            console.log(err)
        }
    }

    getByCityId = async (req, res) => {
        try {
            const cityFromId = req.query.cityFrom
            const cityToId = req.query.cityTo
            const timetable = await Timetable.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                include: [
                    {
                        model: Paths,
                        as: 'idOfPath',
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                        include: [
                            {
                                model: City,
                                as: "toCity",
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"]
                                },
                            },
                            {
                                model: City,
                                as: "fromCity",
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"]
                                },
                            },
                        ],
                        where: {
                            cityFrom: cityFromId,
                            cityTo: cityToId
                        }
                    }
                ]
            })
            res.send({timetable})
        } catch (err) {
            console.log(err)
        }
    }
    getAll = async (req, res) => {
        try {
            const timetables = await Timetable.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                include: [
                    {
                        model: Paths,
                        as: 'idOfPath',
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        }
                    }
                ]
            })
            res.send({timetables})
        } catch (err) {
            console.log(err)
        }
    }
    create = async (req, res) => {
        try {
            const timetable = await Timetable.create({
                timeFrom: req.body.timeFrom,
                timeTo: req.body.timeTo,
                weekday: req.body.weekday,
                everyDay: req.body.everyDay,
                pathId: req.body.pathId
            })
            res.send({timetable})
        } catch (err) {
            console.log(err)
        }
    }
}

const timetableController = new TimetableController()
module.exports = timetableController