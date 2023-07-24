import express from 'express';

import getMatchDetails from '../controllers/match.js';

const router = express.Router();

router.get('/:match_id', getMatchDetails);

export default router;
