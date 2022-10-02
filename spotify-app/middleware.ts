import { NextCookies } from 'next/dist/server/web/spec-extension/cookies'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
const signedinPages = ["/", "playlist", "/libary"]

export default function middleware(req) {
    console.log("req come", req.nextUrl)
    if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
        const token = req.cookies.SPOTIFY_ACCESS_TOKEN
        console.log(token)

        if (!token) {
            const url = req.nextUrl.clone()
            url.pathname = '/signin'
            return NextResponse.redirect(url);
        }
    }
}