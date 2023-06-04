const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Patient = require("../models/patientModel");


//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, email, password  } = req.body;
    if (!firstName  || !email || !password ) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await Patient.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("Patient already registered!");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("Hashed Password: ", hashedPassword);
    // console.log({
    //     "firstName": firstName,
    //     "middleName": middleName,
    //     "lastName": lastName,
    //     "email": email,
    //     "phone": phone,
    //     "password": password

    // })
    const patient = await Patient.create({
        firstName,
        email,
        password: hashedPassword,
    });

    console.log(`User created ${patient}`);
    if (patient) {
        res.status(201).json({ _id: patient.id, email: patient.email });
    } else {
        res.status(400);
        throw new Error("User data us not valid");
    }
    res.json({ message: "Register the user" });
});

// @desc Login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const patient = await Patient.findOne({ email });
    //compare password with hashedpassword
    if (patient && (await bcrypt.compare(password, patient.password))) {
        const accessToken = jwt.sign(
            {
                patient: {
                    id: patient.id,
                    firstName: patient.firstName,
                    
                    email: patient.email,
                    
                },
            },
            process.env.ACCESS_TOKEN_SECERT,
            { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.patient);
});

module.exports = { registerUser, loginUser, currentUser };