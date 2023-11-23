const httpStatus = require('http-status');
const service = require('../service');

const login = async (req, res, next) => {
    try {
        const {id = null, password = null } = req.query;
        const status = await service.loginDetails(id, password);
        console.log('Status', status);
        if (status) res.status(200).send({ message: 'Login Details Match' });
        else res.status(200).send({ message: 'Login Details Not Match'});
    } catch (err) {
        console.log('Error in Login Controllers', err);
    }
}


module.exports = {
    login,
}