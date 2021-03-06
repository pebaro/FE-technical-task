const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			// useCreateIndex: true,
			// useFindAndModify: false,
			useNewUrlParser: true
		})
		console.log('try OK...MongoDB connected')
	} catch (err) {
		console.error(err.message)
		process.exit(1)
	}
}

module.exports = connectDB
