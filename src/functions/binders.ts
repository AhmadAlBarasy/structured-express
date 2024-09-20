import Middleware from '../classes/Middleware';
import AppRoute from '../classes/AppRoute';
import { Application } from 'express';
import MethodsRoute from '../classes/MethodsRoute';
import { HTTPMethod } from '../types/types';

export function bindRoutes(app: Application, routes: (AppRoute | MethodsRoute)[]): void {
    routes.forEach((route) => {
        // if the route is an instance of AppRoute, e.g: new AppRoute('/', handler) | new AppRoute('/', [handler1, handler2]), Handle routes attaching accordingly.
        if (route instanceof AppRoute){
            if (Array.isArray(route.handler))
                app.use(route.path, ...route.handler);
            app.use(route.path, route.handler);
        }
        // if the route is an instance of MethodsRoute, e.g: new MethodsRoute('/', { get: [handler] }), Handle routes attaching accordingly.
        else if (route instanceof MethodsRoute){
            Object.keys(route.handler).forEach(method => {
                const handlers = route.handler[method as HTTPMethod];
                if (handlers)
                    (app as any)[method](route.path, ...handlers);
            });
        }
    });
}

export function bindMiddlewares (app: Application, middlewares: Middleware[]): void {
    middlewares.forEach((middleware) => app.use(middleware.handler));
}