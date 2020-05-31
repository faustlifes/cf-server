import fs from 'fs';
import Singleton from '../utils/singleton';

const path = {
  db: '/db.json',
};
const configurations = {};
class Configurations extends Singleton {
  loadConfigurations = () => {
    configurations.db = JSON.parse(fs.readFileSync(`${process.cwd()}/config/${path.db}`).toString());
  };
}

export default new Configurations();
