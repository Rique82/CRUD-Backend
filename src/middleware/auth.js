import jwt from "jsonwebtoken"

const JWT_SEGREDO = "blackdiamond"

export default function authMiddleware(req, res, next) {

    try {

        const token = req.headers['authorization']
        

        if (!token) {
            throw new Error("nao podix acessarix")
        }

        const decoded = jwt.verify(token.split(' ')[1], JWT_SEGREDO)
        

        console.log(decoded)
        next()

    } catch (error) {

        res.status(403).send({
            data: null,
            msg: error.message,
            error: true
        })

    }
}