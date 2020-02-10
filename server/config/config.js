module.exports = {
  port : process.env.PORT || 3000,
  db : {
    name: "softonix",
    password: "softonix2020"
  },
  authentication : {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}