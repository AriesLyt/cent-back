const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('cent', 'cent', '159753lytaA', {
  host: '119.45.242.136',
  port: '3306',
  dialect: "mysql",
  timezone: "+08:00"
});

// try {
//   sequelize.authenticate().then(()=>{
//     console.log('success');
//   });
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize