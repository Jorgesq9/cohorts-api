const { expressjwt: jwt } = require("express-jwt");


const getTokenFromHeaders = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};

const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET, 
  algorithms: ["HS256"],
  getToken: getTokenFromHeaders,
});
module.exports = { isAuthenticated };