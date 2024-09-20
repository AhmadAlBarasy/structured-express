import AppRoute from "../classes/AppRoute";
import Route from "../classes/MethodsRoute";
import Middleware from "../classes/Middleware";

interface serverConfig {
    port?: number;
    routes?: AppRoute[];
    middlewares?: Middleware[];
};

export default serverConfig;