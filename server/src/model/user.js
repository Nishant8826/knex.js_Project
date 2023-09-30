const knexConnection = require("../connection/knex")
const knex = require('knex')(knexConnection.db)

module.exports.createTable = async function () {
    try {
      // Use the schema builder to create a new table
      await knex.schema.createTable('user', (table) => {
        table.increments('userId').primary();
        table.string('fisrtName',30); 
        table.string('lastName',30); 
        table.string('userName',50); 
        table.string('email',100); 
        table.string('phone',15); 
        table.date('dob'); 
        table.string('gender',10); 
        table.string('password',20); 
        table.string('confirmPassword',20); 
        table.string('image'); 
      });
  
      console.log('Table created successfully');
    } catch (error) {
      console.error('Error creating table:', error);
    } finally {
      // Don't forget to destroy the connection when done
      knex.destroy();
    }
  }
  