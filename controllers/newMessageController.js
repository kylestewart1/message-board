import * as db from "../db/queries.js";

function newMessageGet(req, res) {
  res.render("form");
}

async function newMessagePost(req, res) {
  const { messageUser, messageText } = req.body;
  const message = { 
    text: messageText,
    user: messageUser,
    added: new Date()
  };
  await db.insertMessage(message);
  res.redirect("/");
}

export { newMessageGet, newMessagePost };