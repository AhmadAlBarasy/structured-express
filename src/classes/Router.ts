import RouterOptions from "../interfaces/RouterOptions";
import express, { Router as ExpressRouter } from 'express';
import MethodsRoute from "./MethodsRoute";
import { HTTPMethod } from "../types/types";

class RouterClass {
    private router: ExpressRouter;
    constructor(options: RouterOptions){
        this.router = express.Router(options);
        if (options.routes)
            this.setupRoutes(options.routes);
    }
    public getRouter (): ExpressRouter{
        return this.router;
    }
    // attach routes and methods handlers into the router.
    private setupRoutes(routes: MethodsRoute[]){
        routes.forEach(route => {
            Object.keys(route.handler).forEach(method => {
                const handlers = route.handler[method as HTTPMethod];
                if (handlers)
                    (this.router as any)[method](route.path, ...handlers);
            })
        });
    }
}

export default function Router(options: RouterOptions): ExpressRouter {
    return (new RouterClass(options)).getRouter();
}