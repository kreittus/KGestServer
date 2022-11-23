import { DataSource } from "typeorm"

console.log(__dirname)

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST_DATA_BASE ,
    port:  parseInt(process.env.PORT_DATA_BASE),
    username: process.env.USER_DATA_BASE,
    password: process.env.PASSWORD_DATA_BASE,
    database: process.env.DATA_BASE,
    entities: ["src/entities/*.ts"],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })