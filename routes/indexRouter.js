import { Router, text } from "express";
import * as indexController from "../controllers/indexController.js";
import * as newMessageController from "../controllers/newMessageController.js";


const indexRouter = Router();

indexRouter.get("/", indexController.getAllMessages);

indexRouter.get("/new", newMessageController.newMessageGet);
indexRouter.post("/new", newMessageController.newMessagePost);

indexRouter.get("/messages/:messageId", indexController.getMessageById);

export { indexRouter };