import { config } from 'dotenv';
import { env } from 'process';

export default {
  env: env.NODE_ENV,
  port: parseInt(env.PORT || '3000'),
  secretKey: env.SECRET_KEY,
  database: {
    host: env.DB_HOST,
    port: parseInt(env.DB_PORT || '5432'),
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
};
