const httpStatus = require('http-status');
const service = require('../service');

const login = async (req, res,next) => {
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

const createAccount = async (req, res) => {
    try {
      const { id, password, confirmPassword } = req.body;
      if (password !== confirmPassword){
        return res.status(500).json({message : 'Password and Confirm Password are not same'});
      }
      const { error = [] } = await service.createAccount(id, password);
      if (error.length > 0) {
        return res.status(500).json({message : 'Error while creating the account', error });
      }
      return res.status(200).json({message: 'Account Created Successfully'});
    } catch (err) {
      return res.status(500).json({message : 'Error while creating the account', error: err});
    }
  }
  
  
const getDashBoardDetails = async (req,res) => {
  try {
      
      const{ status = [] } = await service.getDashBoardDetails();
      console.log('Status', status);
      return res.status;
         return res.status(200).json(status);
  } catch (err) {
    console.log('Error in Login Controllers', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
    login,
    createAccount,
    getDashBoardDetails,
}