
module.exports = (sequelize, Sequelize) => {
	const candidate_account = sequelize.define('candidate',{},{
		tableName: 'candidates'
	  });
	
	return candidate_account;
};

