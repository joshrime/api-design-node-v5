import express from 'express'

const app = express()

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Habbit Tracker API',
  })
})

export { app }

export default app
