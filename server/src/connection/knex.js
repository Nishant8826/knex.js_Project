module.exports = {
    db : {
        client: 'mssql', 
        connection: {
            host: 'localhost',
            // port : 3306,
            user: 'sa',
            password: 'Admin@123',
            database: 'techrevAssignment'
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    }
}