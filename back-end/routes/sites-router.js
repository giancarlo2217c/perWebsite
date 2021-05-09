const express = require('express')

const sitesCtrl = require('../controllers/sites-ctrl')

const router = express.Router()

// router.post('/contact', sitesCtrl.createContact)
router.put('./contact/:id', sitesCtrl.updateContact)
router.delete('/contact/:id', sitesCtrl.deleteContact)
router.get('/contact/:id', sitesCtrl.getContactById)
router.get('/contact', sitesCtrl.getContacts)

module.exports = router
