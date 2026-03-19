import 'reflect-metadata';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export class NewsModel {
  @jsonMember
  id: string;

  @jsonMember
  src: string;

  @jsonMember
  date: string;

  @jsonMember
  title: string;
}
