import 'reflect-metadata';
import { jsonMember, jsonObject } from 'typedjson';

@jsonObject()
export class FeedbackModel {
  @jsonMember
  id: string;

  @jsonMember
  title: string;

  @jsonMember
  message: string;
}
