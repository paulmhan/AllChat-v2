const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
const { secret } = require('../config');
const User = require('../models/User');

// Setup options for JwT
const jwtOptions = {
  // Look specifically from the header where it's called authorization
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret,
};

// Create JWT Strategy for handling JWT
// This strategy is for authenticating users on each request
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  // See if the user ID in the payload exists in our database
  //  If it does, call 'done' with that user
  //  otherwise, call done without a user object
  try {
    const user = await User.findById(payload.sub).select('-password');
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

// By default LocalStrategy is looking for username
// However we are not using username, we are using an email address
// So here we are saying, if you're looking for the username,
// look for the email property from the request instead
const localOptions = { usernameField: 'email' };

// Create LocalStrategy for users to sign in using email and password
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  try {
    // See if there's a user with this email
    const user = await User.findOne({ email });
    // If no user with this email, we pass null as there's no error
    // We pass false as a 2nd arg because we didn't find a user
    if (!user) { return done(null, false); }
    // Compare the password given to the encrypted password in the database
    const isMatch = await user.comparePassword(password);
    if (!isMatch) { return done(null, false); }
    // If we do find a match, return done with no error and the user we found
    return done(null, user);
  } catch (e) {
    return done(e);
  }
});

// Let's passport know that we have a 'jwt' strategy defined
passport.use(jwtLogin);
// Let's passport know that we have a 'local' strategy defined
passport.use(localLogin);
