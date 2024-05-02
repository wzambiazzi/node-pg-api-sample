import "reflect-metadata"
import { DataSource } from "typeorm"
//import { Post } from "./entity/Post"
//import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "1q2w3eS",
  database: "teste01",
  //entities: [Photo],
  //synchronize: true,
  logging: false,
})