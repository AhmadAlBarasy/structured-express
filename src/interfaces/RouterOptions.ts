import { RouterOptions as ExpressRouterOptions } from "express";
import MethodsRoute from "../classes/MethodsRoute";
import AppRoute from "../classes/AppRoute";

export default interface RouterOptions extends ExpressRouterOptions {
    routes?: (MethodsRoute | AppRoute)[];
}