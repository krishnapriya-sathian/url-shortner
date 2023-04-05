import { Document } from "mongoose";
import { IShortUrl } from "../interfaces/url";
export interface IShortUrlModel extends IShortUrl, Document {
    _id: string;
}