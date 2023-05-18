import { db } from "../database/database.connection.js"

export async function authValidation(req, res, next){
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    console.log(token)
    if(!token) return res.sendStatus(401)

    try{
        console.log(token)
        const session = await db.query(`SELECT * FROM session WHERE token=$1`,[token])
        if(session.rowCount == 0) return res.sendStatus(401)

        res.locals.session = session

        next()
    }
    catch(err){
        res.status(500).send(err.message)
    }
}