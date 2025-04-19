module.exports = (sequelize, Sequelize) => {
	const employee = sequelize.define('employees',{},{
		tableName: 'employees'
	  });
	
	return employee;
};
