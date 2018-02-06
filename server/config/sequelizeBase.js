//sequelize基础配置文件
const Sequelize = require('sequelize');
const sequelize = new Sequelize('cmh','root','789299168',{
	host:'127.0.0.1',
	dialect:'mysql',
})

module.exports = sequelize;