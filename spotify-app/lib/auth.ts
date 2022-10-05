import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.cookies.SPOTIFY_ACCESS_TOKEN;
        // console.log(token,"hennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
        // console.log("token",token)
        if (token) {
            let user

            try {
                const { id } = jwt.verify(token, "hello");
                user = await prisma.user.findUnique({
                    where: { id }
                })

                if (!user) {
                    throw new Error("N0t real user");
                }
            } catch (error) {
                res.status(401).json({ error: "N0t Authorizied" });
                return
            }

            return handler(req, res, user)
        }
        res.status(401).json({ error: "N0t Authorizied" });
    }
}