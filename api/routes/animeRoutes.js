// animeRoutes.js
const express = require('express');
const animeData = require('./../animeData');

const router = express.Router();

// Get the list of anime
router.get('/list', (req, res) => {
  res.json(animeData);
});

// Get details of a specific anime by ID
router.get('/:id', (req, res) => {
  const animeId = parseInt(req.params.id);
  const anime = animeData.find((anime) => anime.id === animeId);

  if (anime) {
    res.json(anime);
  } else {
    res.status(404).json({ error: 'Anime not found' });
  }
});

module.exports = router;
