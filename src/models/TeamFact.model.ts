import 'reflect-metadata';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export class TeamFactModel {
  @jsonMember
  id: string;

  @jsonMember
  favicon: string;

  @jsonMember
  number: number;

  @jsonMember
  title: string;
}
