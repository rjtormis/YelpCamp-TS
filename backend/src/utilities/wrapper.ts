import { Request, Response, NextFunction } from "express";

/**
 * @param fn
 * @description a function that wraps async/await error
 * @returns function
 */

function wrapper(fn: Function) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}

export default wrapper;
