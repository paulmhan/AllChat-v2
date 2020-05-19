const passport = require('passport');

// Tells passport to look for a 'jwt' strategy we defined
const requireAuth = passport.authenticate('jwt', { session: false });
// Tells passport to look for a 'local' strategy we defined
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = {
  requireAuth,
  requireSignIn,
};
