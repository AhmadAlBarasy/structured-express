import { RequestHandler, Router } from 'express';
import { PathParams } from 'express-serve-static-core';

export default class Route {
    path: PathParams;
    handler: RequestHandler | RequestHandler[] | Router;
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
}