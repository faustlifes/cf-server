import { Injectable, Inject } from "@nestjs/common";
import * as r from "rethinkdb"

@Injectable()
export class RethinkService {

	private connection: r.Connection

	constructor(@Inject('RethinkProvider') connection) {
		this.connection = connection
	}

	async createTable(tableName:string): Promise<r.CreateResult> {
		const result = await r.db('cfUkraine').tableCreate(tableName).run(this.connection)
		return result
	}

	async insert(tableName:string, content:object): Promise<r.WriteResult> {
		const result = await r
			.db('cfUkraine')
			.table(tableName)
			.insert(content)
			.run(this.connection)

		return result
	}

	async findAll(tableName: string): Promise<any[]> {
		const cursor = await r
			.db('cfUkraine')
			.table(tableName)
			.run(this.connection);
		return cursor.toArray();
	}

	async findById(tableName: string, id: string): Promise<any> {
		const result = await r
			.db('cfUkraine')
			.table(tableName)
			.get(id)
			.run(this.connection);
		return result;
	}

	async update(tableName: string, id: string, content: object): Promise<r.WriteResult> {
		const result = await r
			.db('cfUkraine')
			.table(tableName)
			.get(id)
			.update(content)
			.run(this.connection);
		return result;
	}

	async delete(tableName: string, id: string): Promise<r.WriteResult> {
		const result = await r
			.db('cfUkraine')
			.table(tableName)
			.get(id)
			.delete()
			.run(this.connection);
		return result;
	}
}