module.exports = {
  type: 'mysql',
  host: 'database',
  port: 3306,
  username: 'root',
  password: 'hipages',
  database: 'hipages',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
};
