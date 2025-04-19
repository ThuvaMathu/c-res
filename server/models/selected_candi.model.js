
module.exports = (sequelize, Sequelize) => {
	const selected_candidate = sequelize.define('selected_candidate',{},{
		tableName: 'selected_candidates'
	  });
	
	return selected_candidate;
};

