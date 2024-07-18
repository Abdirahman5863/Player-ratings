import mongoose from "mongoose"

const connectToDb = async () => {
    const url = process.env.DATABASE_URL
    mongoose.connect(url).then(() => {
        console.log("connected to db")
    }).catch((err) => {
        console.log(err)
    })
}

export default connectToDb