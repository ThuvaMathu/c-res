
module.exports = (sequelize, Sequelize) => {
	const candidate_account = sequelize.define('candidate_account',{},{
		tableName: 'candidate_account'
	  });
	
	return candidate_account;
};

