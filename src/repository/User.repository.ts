import {Injectable} from "@nestjs/common";
import {BaseRepository} from "./base/base.repository";
import {UserModel} from "../models/User.model";

@Injectable()
export class UserRepository extends BaseRepository<UserModel> {

}