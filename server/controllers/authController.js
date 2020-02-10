const User = require('../models/user');
const config = require('../config/config');
const jwt = require('json-web-token');


function jwtSignUser (user) {
  return jwt.encode(config.authentication.jwtSecret, user)
}

module.exports = {
  async register (req, res) {
    try{
      const user = await User.create(req.body);
      res.send(user);
    } catch (err) {
        res.status(400).send({
        error: err
      })
    }
  },
  async login(req,res){
    try{
      const { name , password } = req.body;
      const user = await User.findOne({
        userName: name
      });
      if (!user) {
        return res.status(403).send({
          error: 'The login was incorrect.'
        })
      }
      const isPassword = password === user.password;
      if (!isPassword){
        return res.status(403).send({
          error: 'The password was incorrect.'
        })
      }
      res.send({
        user: user.userName,
        token: jwtSignUser(user).value
  
      });
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
  }
}