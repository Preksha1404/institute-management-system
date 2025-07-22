import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    educationBoard: {
        type: String,
        required: true
    },
    medium: {
        type: String,
        required: true,
    },
    schoolClass: {
        type: String,
        required: true
    },
    standards: [{
        type: String,
        required: true
    }],
    subjects: [{
        type: String,
        required: true
    }],
    institute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    }
}, { timestamps: true });

export const School = mongoose.model("School", schoolSchema);