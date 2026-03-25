import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: process.env.MYSQL_DB_TYPE || 'mysql',
  host: process.env.MYSQL_DB_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_DB_PORT, 10) || 3306,
  username: process.env.MYSQL_DB_USERNAME || 'root',
  password: process.env.MYSQL_DB_PASSWORD || 'root',
  database: process.env.MYSQL_DB_DATABASE || 'cf_db',
  synchronize: process.env.MYSQL_DB_SYNCHRONIZE === 'true',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
}));
