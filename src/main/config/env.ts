export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT || 5050,
  jwtScrect: process.env.JWT_SECRET || 'tj670==5H'
}
