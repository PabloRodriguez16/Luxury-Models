import dotenv from "dotenv"
dotenv.config({
    path: "./src/config/.env"
});

const {PORT} = process.env
const {DB_HOST} = process.env
const DB_PORT = Number(process.env.DB_PORT)
const {DB_USER} = process.env
const {DB_PASSWORD} = process.env
const {DB_NAME} = process.env

export {PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME} 