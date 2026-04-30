import sql from "./db.js";

sql`
  CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER
  );
`.then(() => {
  console.log("Tabela 'videos' criada com sucesso!");
})