import 'reflect-metadata';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export class ServiceItemModel {
  @jsonMember
  id: string;

  @jsonMember
  img: string;

  @jsonMember
  title: string;

  @jsonMember
  text: string;
}
