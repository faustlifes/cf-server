import 'reflect-metadata';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export class UserModel {
  @jsonMember
  id: string;
  @jsonMember
  name: string;
  @jsonMember
  email: string;
  @jsonMember
  pass: string;
}
