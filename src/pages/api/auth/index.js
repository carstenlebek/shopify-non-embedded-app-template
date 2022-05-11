import Shopify from "../../../lib/shopify";

export default async function handler(req, res) {
    const shop = req.query.shop

    if (!shop) {
        res.redirect('/login')
    }

    const authRoute = await Shopify.Auth.beginAuth(req, res, shop, '/api/auth/callback', true)

    res.redirect(authRoute)

}