const router = require('express').Router();

const apiRoutes = require('./api');

router.use(apiRoutes);

router.use((req, res) => {
  res.status(404).send('404: Error loading');
});

module.exports = router;