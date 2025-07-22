import mongoose from "mongoose";

const instituteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Playhouse', 'School', 'College', 'Competitive Exam Center'],
        required: true
    },
}, { timestamps: true });

export const Institute = mongoose.model("Institute", instituteSchema);