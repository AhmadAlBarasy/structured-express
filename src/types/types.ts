import { RequestHandler, Router } from 'express';

export type AppRequestHandler = RequestHandler | RequestHandler[] | Router;
export type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options';

