import Cookies from "cookies";
import { NextResponse } from 'next/server'
const signedinPages = ["/", "playlist", "/libary"]

export default function middleware(req, res) {

    if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
        console.log("----------------------------------------------------------in Middleware--------------------------------------------------------")
        console.log(req.headers)
        const token = req?.headers?.get('cookie')?.split("=")[1]+1;
        if (!token) {
            const url = req.nextUrl.clone()
            url.pathname = '/signin'
            return NextResponse.redirect(url);
        }
    }

}