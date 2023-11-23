const model = require('../model');

const loginDetails = async (id, password) => {
    const { databaseId = null, databasePassword = null } = await model.getIdPassword(id);
    if (databaseId === null || databasePassword === null) return false;
    if (id === databaseId && password === databasePassword ) return true;
    return false;
}

module.exports = {
    loginDetails,
}