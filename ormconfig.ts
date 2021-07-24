import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const ormConfig: MysqlConnectionOptions = {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    type: 'mysql',
    database: 'typeormtestdb',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: false,
    migrations: ['dist/src/db/migrations/*.js'],
    cli: {
        migrationsDir: 'src/db/migrations'
    }
}

export default ormConfig;