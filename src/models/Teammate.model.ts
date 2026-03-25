import 'reflect-metadata';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export class SocialLinks {
  @jsonMember
  facebook: string;

  @jsonMember
  twitter: string;

  @jsonMember
  skype: string;

  @jsonMember
  vimeo: string;
}

@jsonObject()
export class TeammateModel {
  @jsonMember
  id: string;

  @jsonMember
  src: string;

  @jsonMember
  name: string;

  @jsonMember
  position: string;

  @jsonMember
  social: SocialLinks;
}
