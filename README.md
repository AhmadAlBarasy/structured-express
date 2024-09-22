# About this project
This is an uncontinued project that I ditched because I felt it's idea is not that useful :> The idea behind this project was more like a challenge for me to deepen my knowledge in TypeScript, So I decided to challenge myself to build a library that would allow you to use the express framework in a structured manner, for example:

Instead of starting a server normally like this
```
import express from 'express';

const app = express();

app.listen(3000, () => console.log('Server is listening on port 3000'));
```
You would be using it like this:
```
import { startServer } from 'structured-express';
import { routes, middlewares } from './serverConfig';

const app = startServer({routes, middlewares, port: 4000});
```

And you would have to setup your server configuration either in the same file or in a separate file to define arrays that holds your routes and middlewares like the following:
```
import { AppRoute, MethodsRoute, Middleware } from "structured-express";
import morgan from 'morgan';
import express, { Request, Response, NextFunction } from 'express';
import authRouter from "./routes/authRouter";
import { serverStatus } from "./controllers/authController";


const methodNotAllowed = (req: Request, res: Response) => {
    res.status(405).json({
        status: 'fail',
        message: 'Method not implemented'
    });
}

const routes = [
    new AppRoute('/api/auth', authRouter),
    new AppRoute('/test', serverStatus),
    new MethodsRoute('/test', {
        get: [methodNotAllowed],
    }),
    new AppRoute('/meow', (req: Request, res: Response, next: NextFunction) => {
            console.log('meow has been called');
            next();
        },
        methodNotAllowed,
    ),
];

const middlewares = [
    new Middleware(express.json()),
    new Middleware(morgan('dev')),
];
```

This is an open source project, if you feel that it solves your problems or serves as a starting point to fulfill your needs, feel free to use it.

# API Documentation

## functions

`startServer(config: ServerConfig)`<br>
- return value: The express app object it created.
- parameters: `config` an object that takes 3 optional parameters:
`port` which is the server port (default value: 3000).<br>
`routes` which is an array of Routes classes that holds the definition of the routes.<br>
`middlewares` which is an array of the `Middleware` class which holds the defintion of the middlewares.
```
import { startServer } from 'structured-express'
```