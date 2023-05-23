import { db } from "../database/database.connection.js"
import { nanoid } from "nanoid";

export async function urlsTransforming(req, res){
    try{
        const { url } = req.body;

        const shortUrl = nanoid()

        const add = await db.query(`INSERT INTO urls(url,"shortUrl", "userId") VALUES ($1, $2, $3)`, [url, shortUrl, res.locals.session.rows[0].userId])
        if(!add) return res.send(412)

        const informId = await db.query(`SELECT * FROM urls WHERE url=$1`,[url])

        res.status(201).send({
            "id":informId.rows[0].id,
            "shortUrl":shortUrl,
            "userId": res.locals.session.rows[0].userId
        })
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

export async function urlGet(req, res){
    const { id } = req.params

    try{
        const inform = await db.query(`SELECT * FROM urls WHERE id=$1`,[id])
        if(inform.rowCount == 0) return res.sendStatus(404)

        res.status(201).send({
            "id":inform.rows[0].id,
            "shortUrl":inform.rows[0].shortUrl,
            "url":inform.rows[0].url
        })
    }
    catch(err){
        res.send(500).status(err.message)
    }
}

export async function urlOpen(req, res){

    const { shortUrl } = req.params 

    try{
        const openUrl = await db.query(`SELECT * FROM urls WHERE  "shortUrl"=$1`,[shortUrl])
        if(!openUrl) return res.sendStatus(404)

        const visitCount = openUrl.rows[0].visitCount+1
        await db.query(`UPDATE urls SET "visitCount" = $1 WHERE "shortUrl" = $2;`,[visitCount, shortUrl])

        res.redirect(openUrl.rows[0].url)
    }
    catch(err){
        res.sendStatus(500).send(err.message)
    }
}

export async function urlDelete(req, res){
    const { id } = req.params

    try{
        const selectUrl = await db.query(`SELECT * FROM urls WHERE id=$1`,[id])
        if(selectUrl.rowCount == 0) return res.sendStatus(401)

        const userId = res.locals.session.rows[0].userId
        if(!userId == selectUrl.rows[0].id) return res.sendStatus(401)

        await db.query(`DELETE FROM urls WHERE id=$1`,[id])
        res.sendStatus(204)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}