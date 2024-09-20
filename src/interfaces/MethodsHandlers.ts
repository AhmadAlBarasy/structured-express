import { RequestHandler } from "express";
import { HTTPMethod } from '../types/types';

// the Partial utility is used to make all methods optional.
export default interface MethodsHandlers extends Partial<Record<HTTPMethod, RequestHandler[]>> {}