import mongoose, { Schema } from "mongoose";
import { IShortUrlModel } from "../models/url.model";

const shortUrlSchema: Schema = new Schema(
    {
        full: {
            type: String,
            required: true,
        },
        short: {
            type: String,
            required: true,
            unique: true,
        },
        clicks: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
);

export const ShortUrl = mongoose.model<IShortUrlModel>("shortUrl", shortUrlSchema);
