const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            unique: true,
            required: [true, 'No username included']
        },
        email: {
            type: String,
            required: [true, 'No email included'],
            unique: true,
            // validate email somehow
        }
    }
)