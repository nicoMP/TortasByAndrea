const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async (payload)=> {
    jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.send(token);
        }
      );
}