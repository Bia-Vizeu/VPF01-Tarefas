const express = require('express')
const router = express.Router()

const gerenciamento = require('./controller/controller_dados')

router.post('/gerenciamento', gerenciamento.create)
router.get('/gerenciamento', gerenciamento.read)
module.exports = router; 