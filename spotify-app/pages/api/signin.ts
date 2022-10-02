import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { email, password } = JSON.parse(req.body)
    const newBody = JSON.parse(req.body)
    console.log("emali",email, req.body, req.body.email, newBody, newBody.email)
    const user = await prisma.user.findUnique({
        where: {email},
    })

    console.log(user,"----------------------------------------")
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                time: Date.now(),
            },
            'hello',
            {
                expiresIn: '8h',
            }
        )

        res.setHeader(
            'Set-Cookie',
            cookie.serialize('SPOTIFY_ACCESS_TOKEN', token, {
                httpOnly: true,
                maxAge: 8 * 60 * 60,
                path: '/',
                sameSite: 'lax',
                secure: process.env.NODE_ENV === 'production',
            })
        )

        res.json(user)
    } else {
        res.status(401)
        res.json({ error: 'Email or Password is wrong' })
    }
}