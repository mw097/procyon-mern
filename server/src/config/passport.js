import passport from 'passport';
import passportJWT from 'passport-jwt';
import User from '../models/user.js';

function verifyCallback(payload, done) {
    return User.findOne({_id: payload.id})
        .then( user => {
            return done(null, user)
        })
        .catch( err => {
            return done(err);
        });
}

export default () => {
    const JWTStrategy = passportJWT.Strategy, 
    ExtractJWT = passportJWT.ExtractJwt,
    config = {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SEED
    };

    passport.use(User.createStrategy());
    passport.use( new JWTStrategy( config, verifyCallback));
}