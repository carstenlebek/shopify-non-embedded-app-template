import { NextApiRequest } from "next";
import {NextResponse} from "next/server"

export async function middleware(req: NextApiRequest) {
    if (req.url.includes('/app')) {
        const urlParams = new URLSearchParams(req.url.split("?")[1])

        const query = Object.fromEntries(urlParams)

        const {shop} = query;

        if (req.cookies['shopify_app_session'] === undefined) {
            console.log("Redirect to login")
            return NextResponse.redirect(`${process.env.HOST}/login`)
        } else {
            await fetch(`${process.env.HOST}/api/auth/verify-session?sessionToken=${req.cookies['shopify_app_session']}`)
                .then(response => {
                    if (response.status === 200) {
                        return NextResponse.next()
                    } else {
                        console.log('REDIRECT')
                        if (shop) {
                            return NextResponse.redirect(`${process.env.HOST}/api/auth/offline?shop=${shop}`)
                        } else {
                            return NextResponse.redirect(`${process.env.HOST}/login`)
                        }
                    }
                })
        }
    }

    return NextResponse.next()
}