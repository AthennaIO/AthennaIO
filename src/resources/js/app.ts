import '../css/app.scss'

/**
 * Tell vite the existence of other assets then
 * app.scss and app.js so he could copy everything
 * to the build directory.
 */
import.meta.glob(['../img/**'])
