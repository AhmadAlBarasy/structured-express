import { RequestHandler } from "express";

export default class Middleware {
    handler: RequestHandler;
    constructor(handler: RequestHandler){
        this.handler = handler;
    }
}