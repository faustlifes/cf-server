import 'reflect-metadata';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export class SliderItemModel {
  @jsonMember
  id: string;

  @jsonMember
  img: string;

  @jsonMember
  title1: string;

  @jsonMember
  title2: string;

  @jsonMember
  subTitle: string;

  @jsonMember
  text: string;
}
