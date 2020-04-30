const env = process.env.NODE_ENV === 'production' ? 'pro' : 'dev';
const { appsUrl } = require(`./env/${env}`)

export {
  appsUrl
}