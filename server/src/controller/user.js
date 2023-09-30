const knexConnection = require("../connection/knex");
const knex = require('knex')(knexConnection.db);

// SIGNUP User
module.exports.userSignup = async (req, res) => {
    try {
        let data = req.body;
        let dob = new Date(data.dob);
        data.dob = `${dob.getDate()}-${dob.getMonth() + 1}-${dob.getFullYear()}`
        const insertData = await knex('user').returning('*').insert(data);
        if (!insertData) {
            return res.status(400).send({ status: false, msg: "could not insert data at this moment!" })
        }
        return res.status(201).send({ status: true, data: insertData })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, msg: error.message })
    }
}

// Delete customer

