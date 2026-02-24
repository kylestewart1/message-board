import { Router, text } from "express";


const messages = [
  {
    text: "sup dawg",
    user: "Brometheus",
    added: new Date()
  },
  {
    text: "We've been trying to reach you about your car's extended warranty.",
    user: "Guy Manderson",
    added: new Date()
  },
  {
    text: "ay gurl wyd",
    user: "Himothy",
    added: new Date()
  }
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
})

export { indexRouter, messages };