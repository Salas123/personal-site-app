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

    const fromBody = 'JSII.page <' + process.env.ADMIN_EMAIL + '>'
    const text = 'Hello ' + emailData.fullName  + ', Thank you for your message! This is sent as an automated response just to let you know I received your inquiry. I\'ll get back to you as soon as I can.'
    const messageBody = '<h2>Hello ' + emailData.fullName + ',</h2><p>Thank you for your message! ' +
        'This is sent as an automated response just to let you know I received your inquiry. I\'ll get back to you as soon as I can.</p>';

    const mailOptions = {
        from: fromBody,
        to: emailData.recipient,
        subject: '[Automated Response]',
        text: text,
        html: messageBody,
    };

    return transport.sendMail(mailOptions);

};
