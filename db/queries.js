import pool from "./pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(messageId) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id=${messageId}`);
  return rows[0];
}

async function insertMessage(message) {
  const { text, user, added } = message;
  await pool.query('INSERT INTO messages (text, "user", added) VALUES ($1, $2, $3)', [text, user, added]);
}

export { getAllMessages, getMessageById, insertMessage };