import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    university: [{
        type: String,
        required: true
    }],
    degree: {
        type: String,
        required: true
    },
    courses: [{
        type: String,
        required: true
    }],
    institute: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    }
}, { timestamps: true });

export const College = mongoose.model("College", collegeSchema);