import { Types } from "mongoose";

export interface IShortUrl {
    _id: string,
    full: string,
    short: string,
    clicks?: number
}