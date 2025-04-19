const env = {
  database: 'demoproject',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  multipleStatements: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;