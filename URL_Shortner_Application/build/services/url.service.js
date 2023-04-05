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
exports.findExistingUrl = void 0;
const url_schema_1 = require("../schemas/url.schema");
const findExistingUrl = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = payload;
        const urlData = yield url_schema_1.ShortUrl.findOne({ short: url });
        console.log("urlData::::::::::", urlData);
        if (!urlData) {
            throw { message: "Url is Required" };
        }
        return url_schema_1.ShortUrl.findOne({ urlData });
    }
    catch (error) {
        throw error;
    }
});
exports.findExistingUrl = findExistingUrl;
