import { Application } from "express";

export interface serverConfig {
    port?: number;
}

export function startServer (config: serverConfig): Application

