import SessionModel from "@lib/models/SessionModel";
import mongoose from "mongoose";
import dbConnect from "@lib/db";
import ShopModel from "@lib/models/ShopModel";
import { ApiRequest, NextApiResponse } from "@types";

export default async function handler(req: ApiRequest, res: NextApiResponse) {
    await dbConnect()
    const sessionModel = mongoose.models.session || SessionModel
    const {sessionToken} = req.query

    const session = await sessionModel.findOne({id: sessionToken})
    if (session === null) {
        res.status(403).send("No session")
    } else {
        const shop = await ShopModel.findOne({shop: session.shop})
        if (!shop) {
            res.status(403).send("App not installed")
        } else {
            res.status(200).send('Ok')
        }
    }
}