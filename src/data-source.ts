import { DataSource } from "typeorm"
import { Photo } from "./entity/photo"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "chhunlin",
    password: "lin097",
    database: "work_shop",
    synchronize: true,
    logging: true,
    entities: [Photo],
    subscribers: [],
    migrations: [],
})