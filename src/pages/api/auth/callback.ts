import Shopify from "@lib/shopify";
import { ApiRequest, NextApiResponse } from "@types";

export default async function handler(req: ApiRequest, res: NextApiResponse) {
  try {
    const session = await Shopify.Auth.validateAuthCallback(
      req,
      res,
      req.query
    );

    const webhooks = await Shopify.Webhooks.Registry.registerAll({
      shop: session.shop,
      accessToken: session.accessToken,
    });

    Object.keys(webhooks).forEach((webhook) => {
      if (webhooks[webhook].success === true) {
        console.log(`Registered ${webhook} webhook`);
      } else {
        console.log(
          `Failed to register ${webhook} webhook: ${webhooks.result}`
        );
      }
    });
  } catch (error) {
    console.log(error);
  }

  res.redirect(`/app?host=${req.query.host}&shop=${req.query.shop}`);
}
