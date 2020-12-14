import { StringLiteral } from 'typescript';
import { District } from './District';
import { Role } from './Role';

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  birthdate: Date;
  phone: string;
  role: Role[];
  districts: District;
}
