import { User as UserModel } from '@prisma/client';

export class User implements UserModel {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  role: string;
  status: boolean;
  superAdmin: boolean;
  createdAt: Date;
}
