import Middleware from '../classes/Middleware';
import AppRoute from '../classes/AppRoute';
import { Application } from 'express';

export function bindRoutes(app: Application, routes: AppRoute[]): void {
    if (routes)
    routes.forEach((route) => {
        if (Array.isArray(route.handler))
            app.use(route.path, ...route.handler);
        app.use(route.path, route.handler);
    });
}

export function bindMiddlewares (app: Application, middlewares: Middleware[]): void {
    middlewares.forEach((middleware) => app.use(middleware.handler));
}