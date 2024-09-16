import Route from "../classes/Route";
import Middleware from "../classes/Middleware";

interface serverConfig {
    port?: number;
    routes?: Route[];
    middlewares?: Middleware[];
};

export default serverConfig;