const knexConnection = require("../connection/knex")
const knex = require('knex')(knexConnection.db)

module.exports.createTable = async function () {
    try {
      // Use the schema builder to create a new table
      await knex.schema.createTable('userAddress', (table) => {
        table.increments('addressId').primary();
        table.string('customerId'); 
        table.string('address'); 
        table.string('landmark'); 
        table.string('city'); 
        table.string('state'); 
        table.string('country'); 
        table.string('zipCode'); 
      });
  
      console.log('Table created successfully');
    } catch (error) {
      console.error('Error creating table:', error);
    } finally {
      // Don't forget to destroy the connection when done
      knex.destroy();
    }
  }
  