import express from 'express';

const router = express.Router();

/* GET / */
router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', ['*']);
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json('Invalid endpoint');
});

export default router;