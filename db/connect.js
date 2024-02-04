const mongoose = require("mongoose");


const connectDB = (uri) => {
    return mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    // .then(() => {
    //     console.info("Database connected");
    //   })
    //   .catch((error) => {
    //     console.error("db error", error);
    //     process.exit(1);
    //   });
}

module.exports = connectDB;