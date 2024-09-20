import { RequestHandler, Router } from 'express';
import { PathParams } from 'express-serve-static-core';
import MethodsHandlers from '../interfaces/MethodsHandlers';
import Route from '../interfaces/Route';


// This is a class that wraps a route path and methods handlers that will be attached to express routers.
export default class MethodsRoute implements Route{
    path: PathParams;
    handler: MethodsHandlers;

    constructor(path: PathParams, handler: MethodsHandlers);
    constructor(
        path: PathParams, 
        handler: MethodsHandlers, 
    ){
        this.path = path;
        this.handler = handler;
    }
}
