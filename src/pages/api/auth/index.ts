import Shopify from "@lib/shopify";
import { ApiRequest, NextApiResponse } from "@types";

export default async function handler(req: ApiRequest, res: NextApiResponse ) {
    const shop = req.query.shop

    if (!shop) {
        res.redirect('/login')
    }

    const authRoute = await Shopify.Auth.beginAuth(req, res, shop, '/api/auth/callback', true)

    res.redirect(authRoute)

}