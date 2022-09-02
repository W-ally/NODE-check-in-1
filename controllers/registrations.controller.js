// Models
const { Registration } = require('../models/registration.model');

const getAllRegister = async (req, res) => {
	try {
		const registerAll = await Registration.findAll();

		res.status(200).json({
			status: 'sucess',
			data: {registerAll},
		});
	} catch (error) {
		console.log(error);
	}
};

const getAllRegisterId = async (req, res) => {
	try {
		const { id } = req.params;

		const registerId = await Registration.findOne({ where: { id } });
		
		if (!registerId) {
			return res.status(404).json({
				status: 'error',
				message: 'Register not found',
			});
		}

		res.status(200).json({
			status: 'sucess',
			data: {registerId,},
		});
	} catch (error) {
		console.log(error);
	}
};


const createRegister = async (req, res) => {
	try {
		const { entranceTime, status } = req.body;

		const newRegister = await Registration.create({ entranceTime, status });

		
		res.status(201).json({
			status: 'success',
			data: { newRegister },
		});
	} catch (error) {
		console.log(error);
	}
};

const updateRegister = async (req, res) => {
	try {
		const { exitTime, status} = req.body;
		const { id } = req.params;

		// Check if the user exists before update
		const register = await Registration.findOne({ where: { id } });

		
		if (!register) {
			return res.status(404).json({
				status: 'error',
				message: 'Register not found',
			});
		}
		
		await register.update({ exitTime, status });

		res.status(200).json({
			status: 'success',
			data: { register },
		});
	} catch (error) {
		console.log(error);
	}
};

const cancelRegister = async (req, res) => {
	try {
		const { id } = req.params;
		
		const register = await Registration.findOne({ where: { id } });

		if (!register) {
			return res.status(404).json({
				status: 'error',
				message: 'Register not found',
			});
		}

		
		await register.update({ status: 'cancelled' });

		res.status(204).json({ status: 'success' });
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllRegister,
	getAllRegisterId,
	createRegister,
	updateRegister,
	cancelRegister,
};
