const model = require('../model');

const loginDetails = async (id, password) => {
    const { databaseId = null, databasePassword = null } = await model.getIdPassword(id);
    if (databaseId === null || databasePassword === null) return false;
    if (id == databaseId && password === databasePassword ) return true;
    return false;
}

const createAccount = async ( id, password) => {
    try {
      const isAccountPresent = await model.isAccountPresent(id);
      if (isAccountPresent) {
        return { error: ['The Account with Same id Exists']};
      }
      const res = await model.createAccount(id, password);
      if (res.rowCount>0
      ) 
      return { error :[]};
    else return { error: ['Account Not Created']};;
    } catch (err) {
      console.log(err)
      throw (err);
    }
  }

    const getDashBoardDetails = async () => {

        try {
          const data = await model.getDashBoardDetails();
          return { status: data };
        } catch (err) {
          console.log('Error in getDashBoardDetails', err);
          throw err; // Rethrow the error to propagate it to the caller
        }
      };


module.exports = {
    loginDetails,
    createAccount,
      getDashBoardDetails,
}
