import { Router } from 'express';

const api = new Router();
/**
 * Get a version.
 *
 * @name API version
 * @route {get} /api/version
 * @authentication It's return information about server version
 */
// api.route('/version').get(Version.get);
/**
 * Files.
 *
 * @name API files
 * @routeparam {string} this part is description
 * @route {get} /files/file/info/:fileid
 */
api.route('/test').get((req, res) => { res.status(200).json({ status: 'OK' }).end(); });

export default api;
