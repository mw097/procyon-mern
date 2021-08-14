import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    }
}, {
    timestamps: true
});

UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

export default mongoose.model('User', UserSchema);