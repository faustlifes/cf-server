import 'reflect-metadata';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export class PortfolioItemModel {
  @jsonMember
  id: string;

  @jsonMember
  src: string;

  @jsonMember
  title: string;

  @jsonMember
  category: string;
}
