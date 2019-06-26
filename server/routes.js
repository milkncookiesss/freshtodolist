const router = require('express').Router();
// const controller;

router
  .route('/todos')
  .get(() => {console.log('hi')})


  module.exports = router;