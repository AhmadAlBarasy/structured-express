import Middleware from '../classes/Middleware';
import Route from '../classes/Route';
import { Application } from 'express';

export function bindRoutes(app: Application, routes: Route[]){
    routes.forEach((route) => {
        if (Array.isArray(route.handler))
            app.use(route.path, ...route.handler);
        app.use(route.path, route.handler);
    });
}

export function bindMiddlewares (app: Application, middlewares: Middleware[]){
    middlewares.forEach((middleware) => app.use(middleware.handler));
}