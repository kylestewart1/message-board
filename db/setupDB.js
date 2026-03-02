import { Client } from "pg";

const createMessagesTableSQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  "user" VARCHAR(255),
  added TIMESTAMP
);

INSERT INTO messages (text, "user", added)
VALUES 
  ('sup dawg', 'Brometheus', NOW()),
  ('We''ve been trying to reach you about your car''s extended warranty.', 'Guy Manderson', NOW()),
  ('ay gurl wyd', 'Himothy', NOW());
`;

async function main() {
  console.log("Setting up database.");
  const client = new Client({
    connectionString: process.env.DATABASE_PUBLIC_URL,
  });
  await client.connect();
  await client.query(createMessagesTableSQL);
  await client.end();
  console.log("done");
}

main();