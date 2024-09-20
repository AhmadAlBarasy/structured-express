import RouterOptions from "../interfaces/RouterOptions";
import express, { Router as ExpressRouter } from 'express';
import MethodsRoute from "./MethodsRoute";
import { HTTPMethod } from "../types/types";
import AppRoute from "./AppRoute";

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
    private setupRoutes(routes: (MethodsRoute | AppRoute)[]){
        routes.forEach(route => {
            if (route instanceof MethodsRoute){
                Object.keys(route.handler).forEach(method => {
                    const handlers = route.handler[method as HTTPMethod];
                    if (handlers)
                        (this.router as any)[method](route.path, ...handlers);
                });
            }
            else if (route instanceof AppRoute){
                if (Array.isArray(route.handler))
                    this.router.use(route.path, ...route.handler);
                this.router.use(route.path, route.handler);
            }
        });
    }
}

export default function Router(options: RouterOptions): ExpressRouter {
    return (new RouterClass(options)).getRouter();
}