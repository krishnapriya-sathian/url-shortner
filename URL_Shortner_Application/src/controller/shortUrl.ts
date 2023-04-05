import { Request, Response } from 'express';
import { createShortUrl, findOneShortUrl, findUrl } from '../services/url.service';

/**
 *  Handle generating a new short URL
 * @author krishnapriya
 * @param req 
 * @param res 
 */
export const handleGenerateNewShortURL = async (req: Request, res: Response) => {
    try {
        const body = req.body.fullUrl;
        let shortData = Math.random().toString(36).substring(2, 8); // Generate a random short data for the URL
        await createShortUrl({ body, shortData, clicks: 0 });
        res.redirect('/api/url');
    } catch (error) {
        console.error(error);
        res.status(500).send(`error:${error}`);
    }
}

/**
 * Handle rendering the URL list page with all short URLs
 * @author krishnapriya
 * @param req The request object
 * @param res The response object
 */
export const getGeneratedShortUrl = async (req: Request, res: Response) => {
    try {
        const shortUrls = await findUrl();
        res.render('index', { shortUrls: shortUrls });
    } catch (error) {
        console.error(error);
        res.status(500).send(`error:${error}`);
    }
}

/**
 * Handle recording a visit to a short URL and redirecting to the full URL
 * @author krishnapriya
 * @param req The request object
 * @param res The response object
 */
export const visitHistory = async (req: Request, res: Response) => {
    try {
        const shortUrl: any = await findOneShortUrl({ short: req.params.shortUrl });
        if (shortUrl == null) {
            return res.sendStatus(404);
        }
        shortUrl.clicks++;
        await shortUrl.save();
        res.redirect(`${shortUrl.full}`);
    } catch (error) {
        console.error(error);
        res.status(500).send(`error:${error}`);
    }
};
