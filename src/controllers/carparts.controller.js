import CarPartDAO from "../dao/carparts.dao.js";

const carPartsController = {};

export const getAll = (req, res) => {
    CarPartDAO.getAll()
        .then(carParts => {
            res.json(carParts); // Respondemos directamente con el arreglo de carParts
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const getOne = (req, res) => {
    const partNumber = req.params.partNumber;
    CarPartDAO.getOne(partNumber)
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.status(404).json({
                    status: "Car part not found"
                });
            }
        })
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
}

export const insertOne = (req, res) => {
    CarPartDAO.insertOne(req.body)
        .then(result => res.json({
            status: "Part inserted"
        }))
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
}

export const updateOne = (req, res) => {
    const partNumber = req.params.partNumber;
    const updatedCarPart = req.body;

    CarPartDAO.updateOne(partNumber, updatedCarPart)
        .then(result => {
            if (result) {
                res.json({
                    status: "Part updated"
                });
            } else {
                res.status(404).json({
                    status: "Car part not found"
                });
            }
        })
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
}

export const deleteOne = (req, res) => {
    const partNumber = req.params.partNumber;
    CarPartDAO.deleteOne(partNumber)
        .then(result => {
            if (result) {
                res.json({
                    status: "Part deleted"
                });
            } else {
                res.status(404).json({
                    status: "Car part not found"
                });
            }
        })
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
};
