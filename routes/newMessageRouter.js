import { Router } from "express";
import { messages } from "./indexRouter.js";
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form")
});

newMessageRouter.post("/", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ 
    text: messageText,
    user: messageUser,
    added: new Date()
  });
  res.redirect("/");
})

export default newMessageRouter;