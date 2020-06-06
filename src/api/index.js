import express from "express";

import users from "./greetings";
import list from "./list";

const router = express.Router();

router.use(users);
router.use(list);

export default router;
