import React, {Component} from 'react';
import './ContactMeSection.css';
import {Button, Container, Grid, TextField} from "@material-ui/core";
import axios from "axios";



class ContactMeSection extends Component {

    constructor(props) {
        super(props);

      this.onChangeFullName = this.onChangeFullName.bind(this);
      this.onChangeSubject = this.onChangeSubject.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeMessage = this.onChangeMessage.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state ={
          fullName:'',
          subject:'',
          email:'',
          message:'',
          formSubmitted: false,
      };
    }

    componentDidMount() {
       this.setState({
           fullName:'test user',
       });
    }

    onChangeFullName(e) {

        console.log('Entered full name function...');
        this.setState({
            fullName: e.target.value
        });
    }

    onChangeSubject(e){
        this.setState({
            subject: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });

        console.log('Entered email function...');
    }

    onChangeMessage(e){
        this.setState({
            message: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        if(this.state.fullName === "")
        {
            alert("Need a name to submit!")
            return;
        }
        if(this.state.email === "")
        {
            alert("Need an email to submit!")
            return;
        }
        if(this.state.message ==="")
        {
            alert("Please add a message before submitting!")
            return;
        }

        let formToSubmit = {
            fullName: this.state.fullName,
            subject: this.state.subject,
            email: this.state.email,
            message: this.state.message,
        }

        console.log(formToSubmit);

        this.setState({
            formSubmitted : true
        });

        console.log('Form submitted value: ' + this.state.formSubmitted);
        console.log(formToSubmit);

        axios.post('/add', formToSubmit)
            .then(res => console.log(res.data))
            .catch(err => console.log("Error: " + err))
    }




    render() {
        return(
            <div className='contact-container' id="ContactMeSection">

                {!this.state.formSubmitted && <Container className="contact-me-form-container" fixed>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch">
                        <h1 className='contact-me-header'>CONTACT ME</h1>
                        <div className="contact-me-underline"/>
                        <div className='contact-me-text-container'>
                            <p>
                                I am always looking for new and interesting projects to collaborate on. For any inquiries or to view my resume
                                please email me at my email below and I'll get back to you!
                            </p>
                        </div>
                        <form noValidate autoComplete="off">
                            <TextField className="textfield-component" id="standard-basic" label="Full Name" color="secondary" margin="normal" variant="filled" InputProps={{className:"textfield__body"}} InputLabelProps={{className: "textfield__label"}} onChange={this.onChangeFullName}/>
                            <TextField className="textfield-component" id="standard-basic" label="Email"  color="secondary" margin="normal" variant="filled" InputProps={{className:"textfield__body"}} InputLabelProps={{className: "textfield__label"}} onChange={this.onChangeEmail}/>
                            <TextField className="textfield-component" id="standard-basic" label="Subject of Message"  color="secondary" margin="normal" variant="filled" InputProps={{className:"textfield__body"}} InputLabelProps={{className: "textfield__label"}} onChange={this.onChangeSubject} />
                            <TextField
                                className="textfield-component"
                                id="outlined-multiline-static"
                                label="Message"
                                color="secondary"
                                multiline
                                rows={4}
                                defaultValue="Type Message Here..."
                                variant="outlined"
                                margin="normal"
                                InputProps={{className:"textfield-message-body"}} InputLabelProps={{className: "textfield__label"}}
                                onChange={this.onChangeMessage}
                            />
                        </form>
                        <Button className="submit-button" variant="outlined" color="secondary" onClick={this.onSubmit}>Submit</Button>
                    </Grid>
                </Container>}
                {this.state.formSubmitted && <div className="confirmation-message-container">
                    <h1 className="confirmation-message-header">Thank you for the form submission,</h1>
                    <h1 className="confirmation-message-header">will get back to you shortly via email!</h1>
                </div>}
            </div>
        );

    }
}

export default ContactMeSection;
