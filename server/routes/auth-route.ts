import express from 'express'
import { check } from 'express-validator'

const authControllers = require('../controllers/auth-controllers')

const router = express.Router()


router.post('/register', [
    check('name').notEmpty(),
    check('email').normalizeEmail().isEmail(), 
    check('password').isLength({min:6}),
], authControllers.Register)

router.post('/login', [
    check('email').normalizeEmail().isEmail(), 
    check('password').isLength({min:6}),
], authControllers.Login)

module.exports = router