import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '8141',
    database: 'test',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: ["migrations/*.{ts,js}"],
    migrationsRun: true,
    name: 'default'
};

export const datasource = new DataSource({
    type: config.type,
    host: config.host,
    port: config.port,
    database: config.database,
    username: config.username,
    password: config.password,
    entities: config.entities,
    migrations: config.migrations,
    subscribers: []
})

export default config;