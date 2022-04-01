//const express = require("express");
import * as express from "express";
const router = express.Router();
import db from '../db';

// REST API
router.get('/', async (req, res) => {
    try {
        console.log('doin something?');
        res.json(await db.Chirps.all());
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});
router.get('/:id', async (req, res) => {
    try {
        res.json((await db.Chirps.one(req.params.id))[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});

// Create
router.post('/', async (req, res) => {
    const userid = req.body.userid;
    const content = req.body.content;
    const location = req.body.location;
    try {
        res.json((await db.Chirps.insert(userid, content, location)))
        console.log('new chirp posted');
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dbRes = await db.Chirps.remove(id);
        res.status(200).json(dbRes);
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});


// Update
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const content = req.body.content;
try {
    (await db.Chirps.update(content,id));
        res.sendStatus(200);
        console.log('updated')
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


//module.exports = router;
export default router;