import type { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction) {
  res.status(500).send(err.message);
}
