import Shopify from "@shopify/shopify-api";
import * as mongoose from 'mongoose'
import dbConnect from "./db"
import SessionModel from "./models/SessionModel";

const storeCallback = async (session) => {
    await dbConnect()
    console.log(mongoose.models)
    const sessionModel = mongoose.models.session || SessionModel
    const result = await sessionModel.findOne({id: session.id})

    if (result === null) {
        await mongoose.models.session.create({
            id: session.id,
            shop: session.shop,
            state: session.state,
            isOnline: session.isOnline,
            accessToken: session.accessToken,
            scope: session.scope
        })
    } else {
        await result.update({
            shop: session.shop,
            state: session.state,
            isOnline: session.isOnline,
            accessToken: session.accessToken,
            scope: session.scope
        })
    }

    return true
}

const loadCallback = async (id) => {
    await dbConnect()
    const sessionModel = mongoose.models.session || SessionModel
    const session = await sessionModel.findOne({id})

    if (session.shop.length > 0) {
        return JSON.parse(JSON.stringify(session))
    }
    return undefined
}

const deleteCallback = async (id) => {
    await dbConnect()
    const sessionModel = mongoose.models.session || SessionModel
    await sessionModel.deleteMany({id})
    return true
}

const SessionStorage = new Shopify.Session.CustomSessionStorage(storeCallback, loadCallback, deleteCallback)

export default SessionStorage