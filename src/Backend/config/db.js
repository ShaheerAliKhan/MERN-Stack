const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://shaheer:Whgsbckziu0316@cluster0.pvn0s.mongodb.net/dbUser?retryWrites=true&w=majority";

mongoose.connect(mongoURI);

module.exports = mongoose;