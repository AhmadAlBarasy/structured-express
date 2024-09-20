import { PathParams } from 'express-serve-static-core';

// just an interface that will be extended to create classes that holds different kinds of routes.
export default interface Route {
    path: PathParams;
}