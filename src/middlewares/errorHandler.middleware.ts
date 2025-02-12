import { timeStamp } from 'console';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { DataBaseError } from '../errors/DataBaseError';
import { BadRequestError } from '../errors/BadRequestError';
import { AuthorizationError } from '../errors/AuthorizationError';
import { CustomerError } from '../utils/customerError';

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof CustomerError) {
    return res.status(error.StatusCode).json(error.serialize())
  }
  return res.status(400).json({ message: 'generate error' })
};
