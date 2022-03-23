const mongoose = require('mongoose');
const url = process.env.MONGO_URI;
mongoose.connect(url,err=>err?console.error(err):console.log("MogoDB Connected successfuly :)...".green))
