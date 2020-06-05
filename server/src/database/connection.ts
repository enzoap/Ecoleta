import knex from 'knex'
import path from 'path'
const configuration = require('../../Knexfile')

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development
const connection = knex(config)

// const connection = knex({
//     client: 'sqlite3',
//     connection: {
//         filename: path.resolve(__dirname, 'database.sqlite')
//     },
//     useNullAsDefault: true
// })

export default connection