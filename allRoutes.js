/**
 * public routes
 * do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/', '/test']
/**
 * auth routes
 * do not require authentication
 * @type {string[]}
 */
export const authRoutes = ['/auth/signin', '/auth/auth3/createuser']
/**
 * private routes
 *  require authentication
 * @type {string[]}
 */
export const protectedRoutes = ['/settings', '/logedinDefault']

export const authPrefix = '/api/auth'
/**
 * default redirect path after login
 * @type {string}
 */
export const LOGIN_REDIRECT = '/logedinDefault'