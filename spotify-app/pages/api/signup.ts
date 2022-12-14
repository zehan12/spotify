import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync()
  // console.log(req.body)
  const { firstName, lastName, email, password } = JSON.parse(req.body);

  let user

  try {
    user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, salt),
      },
    })

  } catch (e) {
    console.log(e,"error in sign")
    res.status(401)
    res.json({ error: 'User already exists' })
    return
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    'hello',
    { expiresIn: '8h' }
  )


  console.log(token,"in sigin inn")

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('SPOTIFY_ACCESS_TOKEN', token, {
      // httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: '/',
      // sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  )

  res.json(user)
}