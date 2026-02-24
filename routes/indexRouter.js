import { Router, text } from "express";


const messages = [
  {
    id: 1,
    text: "sup dawg",
    user: "Brometheus",
    added: new Date()
  },
  {
    id: 2,
    text: "We've been trying to reach you about your car's extended warranty.",
    user: "Guy Manderson",
    added: new Date()
  },
  {
    id: 3,
    text: "ay gurl wyd",
    user: "Himothy",
    added: new Date()
  }
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
})

indexRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  const message = messages.find(message => message.id === Number(messageId));
  res.render("messageDetails", { message: message });
})

export { indexRouter, messages };