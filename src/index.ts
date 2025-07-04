import { Elysia } from 'elysia'
import dotenv from 'dotenv'

import sequelize from '@/config/database'

dotenv.config()

const app = new Elysia()
const port = process.env.PORT || 3000

app.get('/', () => 'Welcome to EasyTourSport system! Im Adam the creator of this server.')

;(async () => {
  try {
    await sequelize.authenticate()
    console.log('Database connected')
    app.listen(port)
    console.log(`Server running at http://localhost:${port}`)
  } catch (error: any) {
    console.error('Error:', error)
  }
})()