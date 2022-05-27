const express = require('express');
const router = express.Router();


const FormSub = require('../models/FormSub.model');

router.route('/').get( (req, res) => {
    FormSub.find()
        .then(formSub => res.json(formSub))
        .catch(err => console.log(err))
});

router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const subject = req.body.subject;
    const email = req.body.email;
    const message = req.body.message;

    const newFormSub = new FormSub(
        {
            fullName : fullName,
            subject : subject,
            email : email,
            message : message,
        });

    newFormSub.save()
        .then(() => res.json('New form submitted!'))
        .catch(err => res.status(400).json({
                "error" : err,
                "message" : "Error submitting form"
            })
        )
})

module.exports = router;

