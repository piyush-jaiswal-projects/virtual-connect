import request from 'supertest'
import { app } from '../src/app'

describe('Testing Login APIs', () => {
    it('return success and 200 when login successful', async () => {
        const resonse = await
            request(app)
                .post('/api/v1/user/login/')
                .send({
                    email: "",
                    password: ""
                })
        expect(resonse.status).toBe(200)
    })

    it('return success false and message when empty or invalid inputs are passed', async () => {

    })

    it('return success false when invalid password is passed', async () => {

    })
})
