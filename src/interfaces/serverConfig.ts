import AppRoute from "../classes/AppRoute";
import MethodsRoute from "../classes/MethodsRoute";
import Middleware from "../classes/Middleware";

interface serverConfig {
    port?: number;
    routes?: (AppRoute | MethodsRoute)[];
    middlewares?: Middleware[];
};

export default serverConfig;