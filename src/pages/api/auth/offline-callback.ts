import Shopify from "@lib/shopify";
import dbConnect from "@lib/db";
import ShopModel from "@lib/models/ShopModel";
import { ApiRequest, NextApiResponse } from "@types";

export default async function handler(req: ApiRequest, res: NextApiResponse) {
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