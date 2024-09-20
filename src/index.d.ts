import {
    Application,
    RequestHandler,
    Router,
    RouterOptions as ExpressRouterOptions 
    } from "express";
import { PathParams } from 'express-serve-static-core';
import MethodsRoute from "./classes/MethodsRoute";
import AppRoute from './classes/AppRoute';
import Middleware from './classes/Middleware';


export interface serverConfig {
    port?: number;
    routes?: (AppRoute | MethodsRoute)[];
    middlewares?: Middleware[];
}

export function startServer (config: serverConfig): Application

export type AppRequestHandler = RequestHandler | RequestHandler[] | Router;

export type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options';

// just an interface that will be extended to create classes that holds different kinds of routes.
export default interface Route {
    path: PathParams;
}

// the Partial utility is used to make all methods optional.
export interface MethodsHandlers extends Partial<Record<HTTPMethod, RequestHandler[]>> {
    // to handle dynamic methods
    [key: string]: RequestHandler[] | undefined;
}

export default interface RouterOptions extends ExpressRouterOptions {
    routes?: MethodsRoute[];
}