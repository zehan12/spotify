import Cookies from "cookies";
import { NextResponse } from 'next/server'
const signedinPages = ["/", "playlist", "/libary"]

export default function middleware(req, res) {

    if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
        const token = req?.headers?.get('cookie')?.split("=")[1];
        if (!token) {
            const url = req.nextUrl.clone()
            url.pathname = '/signin'
            return NextResponse.redirect(url);
        }
    }

}