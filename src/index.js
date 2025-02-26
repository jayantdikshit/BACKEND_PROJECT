import dotenv from 'dotenv';

import connectDB from './db/index.js';


dotenv.config({
    path: './.env'
});


connectDB();



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