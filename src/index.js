import dotenv from 'dotenv';

import connectDB from './db/index.js';


dotenv.config({
    path: './.env'
});


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed!!!", err);
    });


/*
(async async => {
    try {
        await mongoose.connect(`${process.env.mongoDB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("error", err);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`APP is listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("error", error)
        throw err
    }
})()
*/