const express = require('express');
const router = express.Router();

const {
    index,
    result,
    history
} = require('../controllers/calculator');

router.get('/', index);
router.post('/', index);

router.get('/:num1/:op/:num2', result);
router.post('/:num1/:op/:num2', result);

router.get('/history', history);




module.exports = router ;