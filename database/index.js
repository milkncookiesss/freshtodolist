const Sequelize = require('sequelize');

const sequelize = new Sequelize('todolist', 'root', 'student', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('connection established to the db');
  })
  .catch((err) => {
    console.error('got an error ', err);
  })