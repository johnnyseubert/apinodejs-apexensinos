const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://user:password@host:port/database', {
   dialectOptions: {
      ssl: {
         require: true,
         rejectUnauthorized: false
      }
   }
}
);
module.exports = sequelize;