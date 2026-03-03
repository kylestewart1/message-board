import * as db from "../db/queries.js";

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
}

async function getMessageById(req, res) {
  const message = await db.getMessageById(req.params.messageId);
  res.render("messageDetails", { message: message });
}

export { getAllMessages, getMessageById };