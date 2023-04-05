import express, { Router } from "express";
import { getGeneratedShortUrl, handleGenerateNewShortURL, visitHistory } from "../controller/shortUrl";
const router = express.Router();

router.post("/url", handleGenerateNewShortURL);//route for generating a new short URL

router.get('/url', getGeneratedShortUrl);// route for retrieving all generated short URLs

router.get('/url/:shortUrl', visitHistory);//route for redirecting to the full URL associated with a given short URL

export default router;