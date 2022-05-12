import * as mongoose from 'mongoose'

const SessionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    shop: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    isOnline: {
        type: Boolean,
        required: true
    },
    accessToken: {
        type: String,
        required: false
    },
    scope: {
        type: String,
        required: false
    }
})

const SessionModel = mongoose.models.session ? mongoose.models.session : mongoose.model('session', SessionSchema)

export default SessionModel