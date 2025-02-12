import { NextFunction, Request, Response } from "express";
import { DataBaseError } from "../errors/DataBaseError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { BadRequestError } from "../errors/BadRequestError";
async function httpSignUp(req: Request, res: Response, next: NextFunction) {
  next(new DataBaseError());
}

async function httpSignIn(req: Request, res: Response, next: NextFunction) {
  next(new AuthorizationError());
}

async function httpSignOut(req: Request, res: Response, next: NextFunction) {
  next(new BadRequestError('sign out error'));
}

export { httpSignUp, httpSignIn, httpSignOut };
