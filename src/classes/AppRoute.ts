import Route from "../interfaces/Route";
import { RequestHandler, Router } from 'express';
import { PathParams } from 'express-serve-static-core';
import { AppRequestHandler } from '../types/types';

// This is a class that wraps a route path and the chain of middlewares that handles requests to that path,
// this will be attached directly to the express application or directly to express routers.
export default class AppRoute implements Route {
    path: PathParams;
    handler: AppRequestHandler;

    constructor(path: PathParams, handler: RequestHandler | Router);
    constructor(path: PathParams, ...handlers: RequestHandler[]);
    constructor(path: PathParams, handler: RequestHandler | Router, ...handlers: RequestHandler[]){
        this.path = path;
        if (handler instanceof Router)
            this.handler = handler;
        else if (handlers)
            this.handler = [handler, ...handlers];
        else
            this.handler = handler;
    }
};