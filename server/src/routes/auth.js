import { Router } from 'express';
import passport from 'passport';
import AuthController from '../controllers/authController.js';

export default () => {
    const api = Router();
    
    api.post('/login', passport.authenticate('local', { session: false }), AuthController.login);
    api.post('/register', AuthController.register);

    return api;
}