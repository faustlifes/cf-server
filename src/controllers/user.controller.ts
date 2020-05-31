import {Body, Controller, Delete, Get, Post, Put, Req} from "@nestjs/common";
import {UserModel} from "../models/User.model";
import { Request } from 'express';


@Controller()
export class UserController {

	@Get('/users')
	getUserList(@Req() request: Request): UserModel[] {
    return [] as UserModel[];
	};
	@Get('/users/:id')
	getUserById(@Req() request: Request): UserModel {
		return {} as UserModel;
	};

	@Post('/users')
	addUser(@Body() user: UserModel): UserModel {
    return {} as UserModel;
	};
	@Put('/users')
	updateUser(@Body() user: UserModel): UserModel {
   return {} as UserModel;
	};

	@Delete('/users')
	deleteUser(req, res) {
    return;
	};

}