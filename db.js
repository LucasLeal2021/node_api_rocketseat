import 'dotenv/config';
import postgres from "postgres";

const sql = postgres("postgresql://admin:password123@localhost/postgres");

export default sql;