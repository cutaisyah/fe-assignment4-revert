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
  role: Role;
  districts: District;
  old_password: string;
  tournament_approved: string;
}

export interface createDistrict{
  districts: string;
}

export class UpdateUser {
  username: string;
  birthdate: string;
  email: string;
  phone: string;
}

export class UpdateUserPassword {
  password: string;
  old_password: string;
}

export interface UpdateApproved{
  _id: string;
}

export interface RegisterTournament{
  game: string;
}

export interface RegisterOtherMember{
  username: string;
}