const mongoose = require('mongoose')

/**
 * Connect to MongoDB
 * @returns {Promise<void>}
 */
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27018/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to MongoDB')
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { connect }
