const mongoose = require("mongoose");
var validator = require('validator');
// const isEmail = require('isEmail')

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const patientSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please add the user name"],
        },
        // middleName: {
        //     type: String,
        //     // required: [true, "Please add the user name"],
        // },
        // lastName: {
        //     type: String,
        //     // required: [true, "Please add the user name"],
        // },

        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            unique: [true, "Email address already taken!"],
            required: 'Email address is required',
            validate: [validator.isEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },

        
        password: {
            type: String,
            required: [true, "Please add the user password"],
        },
        // phone: {
        //     type: String,
           
        //     // required: [true, "Please add the Phone Number"],
        // },
        // gender: {
        //     type: String,
        //     // required: [true, "Please add the Gender"],
        // },
        // height: {
        //     type: String,
        //     // required: [true, "Please add the Gender"],
        // },
        // weight: {
        //     type: String,
        //     required: [true, "Please add the Gender"],
        // },
        // bloodGrp: {
        //     type: String,
        //     // required: [true, "Please add the Gender"],
        // },
        // location: {
        //     type: String,
        //     // required: [true, "Please add the Gender"],
        // },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Patient", patientSchema);
