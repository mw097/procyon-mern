import passport from 'passport';

// Check if user is logged in
export default (req, res, next) => {
    return passport.authenticate('jwt', { session: false })(req, res, next);
}