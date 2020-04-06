const mongoose = require('mongoose');
const { Schema } = mongoose;

const classSchema = new Schema({

    name : { type: String, required: true },
    classteacher : { type: Schema.Types.ObjectId, ref: 'teachers'},

    students: [
        { type: Schema.Types.ObjectId, ref: 'student'}
    ]
    
}, { timestamps: true});

module.exports = mongoose.model('Classes', classSchema);