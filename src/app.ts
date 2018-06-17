/**
 * App Settings and configuration
 */

import express from 'express'
import routes from './routes'

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3001)

// Routes
app.use(routes)

// initialise DB here and pass it as reference to router

export default app