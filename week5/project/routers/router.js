let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function (req, res) {
  controller.insterResult(req, res);
});
router.get('/', function (req, res) {
  controller.fetchResult(req, res);
});

module.exports = router;
