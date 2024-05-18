const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongodb= require('mongodb');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Forgot Password Route
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    // Generate a random token (you can use libraries like 'crypto' to create unique tokens)
    const token = generateRandomToken();

    // Example reset link (replace with your own reset password link)
    const resetLink = `http://example.com/reset-password?token=${token}`;

    // Send the reset link to the user's email
    sendResetPasswordEmail(email, resetLink)
        .then(() => {
            res.status(200).json({ message: 'Reset password email sent successfully.' });
        })
        .catch((error) => {
            console.error('Error sending reset password email:', error);
            res.status(500).json({ message: 'Failed to send reset password email.' });
        });
});

// Function to send reset password email
function sendResetPasswordEmail(email, resetLink) {
    return new Promise((resolve, reject) => {
        // Create a nodemailer transporter (replace with your own email configuration)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your_email@gmail.com',
                pass: 'your_password'
            }
        });

        // Email message
        const mailOptions = {
            from: 'your_email@gmail.com',
            to: email,
            subject: 'Reset Password',
            html: `Click <a href="${resetLink}">here</a> to reset your password.`
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
}

// Helper function to generate a random token (for demonstration purposes)
function generateRandomToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
