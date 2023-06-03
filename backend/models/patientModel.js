const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please add the user name"],
        },
        middleName: {
            type: String,
            // required: [true, "Please add the user name"],
        },
        lastName: {
            type: String,
            // required: [true, "Please add the user name"],
        },
        email: {
            type: String,
            required: [true, "Please add the user email address"],
            unique: [true, "Email address already taken"],
        },
        password: {
            type: String,
            required: [true, "Please add the user password"],
        },
        phone: {
            type: String,
           
            required: [true, "Please add the Phone Number"],
        },
        gender: {
            type: String,
            required: [true, "Please add the Gender"],
        },
        height: {
            type: String,
            required: [true, "Please add the Gender"],
        },
        weight: {
            type: String,
            required: [true, "Please add the Gender"],
        },
        bloodGrp: {
            type: String,
            required: [true, "Please add the Gender"],
        },
        location: {
            type: String,
            required: [true, "Please add the Gender"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Patient", patientSchema);
