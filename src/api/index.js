import express from 'express';
const router = express.Router();

import users from './greetings';
import list from './list';

router.use(users);
router.use(list);

export default router;
