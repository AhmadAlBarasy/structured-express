import { RequestHandler, Router } from 'express';
import { PathParams } from 'express-serve-static-core';

export default class Route {
    path: PathParams;
    handler: RequestHandler | Router;
    constructor(path: PathParams, handler: RequestHandler | Router){
        this.path = path;
        this.handler = handler;
    }
}