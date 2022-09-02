const express = require('express');

// Controllers
const {
	getAllRegister,
	getAllRegisterId,
	createRegister,
	updateRegister,
	cancelRegister,
} = require('../controllers/registrations.controller');

const registrationRouter = express.Router();

registrationRouter.get('/', getAllRegister);

registrationRouter.get('/:id', getAllRegisterId);

registrationRouter.post('/', createRegister);

registrationRouter.patch('/:id', updateRegister);

registrationRouter.delete('/:id', cancelRegister);

module.exports = { registrationRouter };
