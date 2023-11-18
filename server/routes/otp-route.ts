import express from 'express'
import { check } from 'express-validator'

const otpControllers = require('../controllers/otp-controllers')

const router = express.Router()

router.post('/verifyOtp', [
    check('email').normalizeEmail().isEmail(),
], otpControllers.VerifyOtp)

module.exports = router