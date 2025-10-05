import express from 'express'
import userRoutes from './routes/userRoutes.ts'
import authRoutes from './routes/authRoutes.ts'
import habitRoutes from './routes/habitRoutes.ts'

const app = express()

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Habit Tracker API',
  })
})

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/habits', habitRoutes)

export { app }

export default app
