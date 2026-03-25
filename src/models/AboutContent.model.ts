import 'reflect-metadata';
import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export class Skill {
  @jsonMember
  text: string;

  @jsonMember
  width: string;

  @jsonMember
  backgroundColor: string;
}

@jsonObject()
export class AboutContentModel {
  @jsonMember
  id: string;

  @jsonMember
  biography: string;

  @jsonMember
  historyHtml: string;

  @jsonArrayMember(Skill)
  skills: Skill[];
}
