import { ErrorRequestHandler, NextFunction, Request, Response, } from 'express';

export const errorLog: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(error.stack)
  next(error)
};