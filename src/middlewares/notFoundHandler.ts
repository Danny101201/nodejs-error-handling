import { ErrorRequestHandler, NextFunction, Request, Response, } from 'express';

export const notFoundHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('notFoundHandler')
  res.status(404).json({
    error: 404,
    message: "Route not found."
  })
};