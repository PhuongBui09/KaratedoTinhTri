import type { Request } from 'express';

export type Role = 'super_admin' | 'admin' | 'coach';

export interface AuthUser { id: string; name: string; email: string; role: Role }
export interface AuthenticatedRequest extends Request { user?: AuthUser }

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express { interface Request { user?: AuthUser } }
}
