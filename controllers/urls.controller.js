import { db } from "../database/database.connection.js"
import { nanoid } from "nanoid";

export async function urlsTransforming(req, res){
    try{
        const { url } = req.body;

        const shortUrl = nanoid()

        const add = await db.query(`INSERT INTO urls(url,"shortUrl") VALUES ($1, $2)`, [url, shortUrl])
        if(!add) return res.send(412)

        const informId = await db.query(`SELECT * FROM urls WHERE url=$1`,[url])

        res.status(201).send({
            "id":informId.rows[0].id,
            "shortUrl":shortUrl
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
        if(!inform) return res.sendStatus(404)

        res.status(201).send({
            "id":inform.rows[0].id,
            "shortUrl":inform.rows[0].shortUrl,
            "url":inform.rows[0].url
        })
    }
    catch(err){
        res.send(200).status(err.message)
    }
}