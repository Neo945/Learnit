const mongoose = require('mongoose');
const validator = require('validator').default;

const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10,
        validate: [validator.isMobilePhone, 'Invalid Phone number'],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;
