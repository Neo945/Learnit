const mongoose = require('mongoose');

const { Schema } = mongoose;

const AresponseSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        question: {
            type: Schema.Types.ObjectId,
            ref: 'question',
            required: true,
        },
        answerMCQ: {
            type: Number,
            required: true,
            default: 0,
        },
        answerTF: {
            type: String,
            required: true,
            trim: true,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

const Aresponse = mongoose.model('Aresponse', AresponseSchema);
module.exports = { Aresponse };
