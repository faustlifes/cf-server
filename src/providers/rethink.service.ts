import { Injectable, Inject } from '@nestjs/common';
import * as r from 'rethinkdb';

@Injectable()
export class RethinkService {
  private connection: r.Connection;

  constructor(@Inject('RethinkProvider') connection) {
    this.connection = connection;
  }

  /**
   * Creates a new table in the RethinkDB instance
   * @param tableName Name of the new Table
   * @returns Creation status promise
   */
  async createTable(tableName: string): Promise<r.CreateResult> {
    const result = await r
      .db('cfUkraine')
      .tableCreate(tableName)
      .run(this.connection);
    return result;
  }

  /**
   * Inserts data in the specified table
   * @param tableName Table where insert data
   * @param content Data to insert
   */
  async insert(tableName: string, content: object): Promise<r.WriteResult> {
    const result = await r
      .table(tableName)
      .insert(content)
      .run(this.connection);

    return result;
  }

  initMeetingsDbConnection() {
    /*		let conn = null;
		return r.connect(configurations.readAllAndMergeFrom('conf/rethinkdb-connection.json'))
			.then((connection) => {
				conn = connection;
				return r.dbList().run(conn);
			})
			.then((list) => {
				if (!list.includes('MeetingsDb')) {
					return r.dbCreate('MeetingsDb').run(conn);
				}
				return Promise.resolve();
			})
			.then(() => r.db('MeetingsDb').tableList().run(conn))
			.then((list) => {
				if (!list.includes('meetings')) {
					return r.db('MeetingsDb').tableCreate('meetings').run(conn);
				}
				return Promise.resolve();
			})
			.then(() => r.db('MeetingsDb').table('meetings').indexList().run(conn))
			.then((list) => {
				let meetingCodeIndexPromise = Promise.resolve();
				if (!list.includes('meetingCode')) {
					meetingCodeIndexPromise = r.db('MeetingsDb').table('meetings').indexCreate('meetingCode').run(conn);
				}
				let meetingCodeRawIndexPromise = Promise.resolve();
				if (!list.includes('meetingCodeRaw')) {
					meetingCodeRawIndexPromise = r.db('MeetingsDb').table('meetings').indexCreate('meetingCodeRaw').run(conn);
				}
				let documentIdIndexPromise = Promise.resolve();
				if (!list.includes('documentId')) {
					documentIdIndexPromise = r.db('MeetingsDb').table('meetings').indexCreate('documentId').run(conn);
				}
				let ownerIdIndexPromise = Promise.resolve();
				if (!list.includes('ownerId')) {
					ownerIdIndexPromise = r.db('MeetingsDb').table('meetings').indexCreate('ownerId').run(conn);
				}
				return Promise.all([
					meetingCodeIndexPromise,
					meetingCodeRawIndexPromise,
					documentIdIndexPromise,
					ownerIdIndexPromise,
				]);
			})
			.then(() => r.connect(configurations.readAllAndMergeFrom('conf/rethinkdb-connection.json', 'conf/rethinkdb-connection-meetings.json')));*/
  }
}
