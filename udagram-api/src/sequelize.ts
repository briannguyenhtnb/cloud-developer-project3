import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  dialectOptions: {
    ssl: {
      require: true, // RDS requires SSL
      rejectUnauthorized: false // Disable SSL certificate verification (optional, use based on your SSL setup)
    }
  },
  'storage': ':memory:',
});
