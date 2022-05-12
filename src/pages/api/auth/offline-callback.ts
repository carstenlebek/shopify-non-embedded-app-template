import Shopify from "@lib/shopify";
import {ApiRequest, NextApiResponse} from "@types";

export default async function handler(req: ApiRequest, res: NextApiResponse) {
    try {
        const session = await Shopify.Auth.validateAuthCallback(req, res, req.query)
    } catch (error) {
        console.log(error)
    }

    res.redirect(`/api/auth/?host=${req.query.host}&shop=${req.query.shop}`)
}