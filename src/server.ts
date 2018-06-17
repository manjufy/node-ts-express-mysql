import app from './app'
import errorhandler from 'errorhandler'

/**
 * Error Handler. Provides full stack - remove for production
 */
if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler())
}

/**
 * Start express server
 */
const server = app.listen(app.get('port'), () => {
  console.log(`Devly api running at http://localhost:${app.get('port')} in ${app.get('env')}`)
  console.log(' Press CTRL-C to stop \n')
})

export default server