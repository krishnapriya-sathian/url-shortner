
import { ShortUrl } from "../schemas/url.schema";

export const findExistingUrl = async (payload: { url: string; }) => {
    try {
        const url = payload;
        const urlData = await ShortUrl.findOne({ short: url });
        return ShortUrl.findOne({ urlData });
    } catch (error) {
        throw error;
    }
};

export const createShortUrl = async (payload: { body: string, shortData: string, clicks: Number }) => {
    const { body, shortData, clicks } = payload;
    return await ShortUrl.create({
        full: body,
        short: shortData,
        clicks: clicks,
    });
}

export const findUrl = async () => {
    return await ShortUrl.find();
}

export const findOneShortUrl = async (payload: { short: string }) => {
    return await ShortUrl.findOne({ short: payload.short });
}