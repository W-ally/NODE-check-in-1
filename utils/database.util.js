const { Sequelize, DataTypes } = require('sequelize');

// Establish db connection
const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'watu123',
	port: 5432,
	database: 'check',
	logging: false,
});

module.exports = { db, DataTypes };
