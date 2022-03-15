const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            unique: true,
            required: [true, 'Username is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts: {
            // array of _id values referencing the Thought model
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
        // array of _id values referencing the User model (self-reference)
        friends: [ this ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
    }
);

// get total count of friends
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;