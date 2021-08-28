const mongoose = require('mongoose');

const { Schema } = mongoose;

const AnswerSchema = new Schema(
    {
        typeans: {
            type: String,
            required: true,
        },
        answerMCQ: [
            {
                type: String,
            },
        ],
        answerTF: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
const Answer = mongoose.model('answer', AnswerSchema);
module.exports = { Answer };
