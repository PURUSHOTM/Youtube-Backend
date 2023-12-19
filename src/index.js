// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
import connectDb from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDb()

    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.error("MongoDb connection error: " + err);
    })



// const app = express();
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR: Couldn't connect to Mongo", error);
//             throw error
//         })
//         app.listen(process.env.port, () => {
//             console.log(`App is listening on ${process.env.PORT}`);

//         })
//     } catch (error) {
//         console.error("Error: ", error)
//         throw error
//     }

// })()