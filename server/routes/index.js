//const express = require('express')
import * as express from "express";
const router = express.Router();
//const chirpsRouter = require("./chirps");
import chirpsRouter from "./chirps"

// localhost:3000/api/chirps/
router.use("/chirps", chirpsRouter);

//module.exports = router;
export default router;