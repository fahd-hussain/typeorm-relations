import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const ormConfig: MysqlConnectionOptions = {
    type: 'mysql',
    database: 'typrormTestDB',
    entities: ['dist/src/**/*.entity.ts'],
    synchronize: true,
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
}

export default ormConfig;