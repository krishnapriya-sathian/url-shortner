"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGenerateNewShortURL = void 0;
const url_service_1 = require("../services/url.service");
const ShortUrl = require('../schemas/url.schema');
const handleGenerateNewShortURL = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("starting handleGenerateNewShortURL");
    console.log("req body:::::::::::::::::::::", req.body);
    const body = req.body.fullUrl;
    console.log('body:::', body);
    if (!body.fullUrl) {
        return res.status(400).json({ error: 'URL is required' });
    }
    let shortUrl = Math.random().toString(36).substring(2, 8);
    let existingUrl = yield (0, url_service_1.findExistingUrl)(body);
    console.log("existingUrl::::::::::::::::::::", existingUrl);
    while (existingUrl) {
        shortUrl = Math.random().toString(36).substring(2, 8);
        existingUrl = yield ShortUrl.findOne({ short: shortUrl });
    }
    yield ShortUrl.create({
        full: body,
        short: shortUrl,
        clicks: 0,
    });
    res.redirect('/');
});
exports.handleGenerateNewShortURL = handleGenerateNewShortURL;
