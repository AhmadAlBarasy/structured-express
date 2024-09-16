import express, { Application, Router } from 'express';
import serverConfig from '../interfaces/serverConfig';
import { bindRoutes, bindMiddlewares } from './binders';

const startServer = (config: serverConfig): Application => {
    const { routes, middlewares, port } = config;
    const app: Application = express();

    // use middlewares if provided
    if (middlewares){
        bindMiddlewares(app, middlewares);
    }
    // bind the routes if provided
    if (routes){
        bindRoutes(app, routes);
    }
    // start the server
    app.listen(port || 3000);
    return app;
};

export default startServer;