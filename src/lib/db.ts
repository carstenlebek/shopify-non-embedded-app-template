import * as mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI !== "" ? process.env.MONGO_URI : "mongodb://localhost:27017/test"

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = {conn: null, promise: null}
}

export default async function dbConnect() {
    console.log('db connect')
    if (cached.conn) {
        console.log('cached connection')
        return cached.conn
    }

    if (!cached.promise) {

        cached.promise = mongoose.connect(MONGO_URI).then(mongoose => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}