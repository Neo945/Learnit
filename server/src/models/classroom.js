const mongoose = require('mongoose');
const validator = require('validator').default;

const { Schema } = mongoose;

const classroomSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
            validate: {
                validator: (name) => validator.isAlphanumeric(name),
            },
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 500,
        },
        teacher: {
            type: Schema.Types.ObjectId,
            ref: 'teacher',
            required: true,
        },
        students: [
            {
                type: Schema.Types.ObjectId,
                ref: 'student',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Classroom = mongoose.model('classroom', classroomSchema);
module.exports = Classroom;
