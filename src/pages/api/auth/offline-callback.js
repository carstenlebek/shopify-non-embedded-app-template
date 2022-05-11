import Shopify from "../../../lib/shopify";
import dbConnect from "../../../lib/db";
import ShopModel from "../../../lib/models/ShopModel";

export default async function handler(req, res) {
    await dbConnect()
    try {
        const session = await Shopify.Auth.validateAuthCallback(req, res, req.query)
        await ShopModel.create({
            shop: session.shop,
            isActive: true,
            offlineAccessToken: session.accessToken
        })

    } catch (error) {
        console.log(error)
    }

    res.redirect(`/api/auth/?host=${req.query.host}&shop=${req.query.shop}`)
}