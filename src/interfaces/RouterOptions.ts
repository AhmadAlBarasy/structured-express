import { RouterOptions as ExpressRouterOptions } from "express";
import MethodsRoute from "../classes/MethodsRoute";

export default interface RouterOptions extends ExpressRouterOptions {
    routes?: MethodsRoute[];
}