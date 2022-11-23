const mongoose = require ("mongoose")

// const connectionStr= process.env.MONGODB_URI

// set up connection with the DB
// mongoose.connect("connectionStr", { useNewUrlParser: true });


mongoose.connect(MONGODB_URI="mongodb+srv://admin:j0eB47cPnIi2U7o3@kaywish.88ezyye.mongodb.net/?retryWrites=true&w=majority")

console.log(MONGODB_URI)

// set up listeners to monitor your database connection
mongoose.connection.on('connected', ()=> console.log('Mongo DB connected... 🙌🙌🙌'));

mongoose.connection.on('error', (err)=> console.log(err.message));

mongoose.connection.on('disconnected', ()=> console.log('mongoose disconnected'));

