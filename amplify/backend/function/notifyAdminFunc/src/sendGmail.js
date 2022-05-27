const nodeMailer = require('nodemailer');
const {google} = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});


module.exports.sendMailHandler = async function(event, context, emailData){
    const transport = await nodeMailer.createTransport(
        {
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.ADMIN_EMAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: oAuth2Client.getAccessToken(),
            }

        });

    const fromBody = emailData.fullName;
    const text = 'Name: ' + emailData.fullName + 'email: ' + emailData.recipient + 'message: ' +emailData.message
    const messageBody = '<p> Name: ' + emailData.fullName + '</p>' + '<p> email: ' + emailData.recipient + '</p>'  + '<p> Message: ' + emailData.message + '</p>' ;

    const mailOptions = {
        from: fromBody,
        to: process.env.ADMIN_EMAIL,
        subject: 'Message From: ' + emailData.fullName,
        text: text,
        html: messageBody,
    };

    return transport.sendMail(mailOptions);

};
