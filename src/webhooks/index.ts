import dbConnect from "@lib/db";
import ShopModel from "@lib/models/ShopModel";
import mongoose from "mongoose";

const shopModel = mongoose.models.shop || ShopModel

const webhooks = {
    "APP_UNINSTALLED": {
        path: '/api/webhooks',
        webhookHandler: async (topic, shop, body) => {
            await dbConnect()
            await shopModel.deleteMany({shop})
            console.log("App uninstalled")
        }
    }
}

export default webhooks