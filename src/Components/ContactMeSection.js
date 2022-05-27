import React, {useState} from "react";
import './ContactMeSection.css';
import ButtonIconComponent from "./Button/ButtonIconComponent";
import {API} from "aws-amplify";


function ContactMeSection(){
    let currentTimeStamp = new Date();

    const [form, setForm] = useState({
        email: "",
        fullName: "",
        message: "",
        timeStamp: currentTimeStamp.toLocaleDateString(),
    });


    const[formVisible, setFormVisible] = useState('-visible');
    const[emailConfirmation, setEmailConfirmation] = useState('-invisible');


    function formVerification(){
        if(form.fullName === '') {window.alert('Must Enter A Name, Would Love To Know Who I\'m Talking To!'); return false;}
        if(form.email === "" || !emailVerification()){window.alert('Must enter an email!'); return false;}
        if(form.message === "") {window.alert('Must enter a message, would love to hear what you have to say!'); return false;}

        return true;
    }

    function emailVerification() {
        let email_str = form.email;
        const email_arr = email_str.split('@');
        return email_arr.length > 1;
    }


    function updateForm(value){
        return setForm((prev) => {
            return {...prev, ...value};
            }
        );
    }

    async function emailSend()
    {

        if(formVerification() === false){
            console.log('Form verification failed... check input forms')
            return;
        }

        setFormVisible('-invisible');
        setEmailConfirmation('-visible');

        API.post('DownloadResumeAPI', '/formsubmission', {
            body: {...form},
        })
            .then(res =>{
                console.log(res);


                if(res.queryAcknowledgment){

                    API.post('DownloadResumeAPI', '/notifyclient',{
                       body:{
                           recipient: form.email,
                           message: form.message,
                           fullName: form.fullName
                       }
                    }).then(response => {
                        console.log(response);

                    }).catch(err =>{
                        console.error(err)
                    });


                    API.post('DownloadResumeAPI', '/notifyadmin',{
                        body:{
                            recipient: form.email,
                            message: form.message,
                            fullName: form.fullName
                        }
                    }).then(response => {
                        console.log(response);

                    }).catch(err =>{
                        console.error(err)
                    });
                }

            })
            .catch(err => {console.error(err);});

        setForm({fullName: "", message: "", email: ""});


    }


    return(
        <div className={'ContactMeSectionContainer'}>
            <div className={'ContactMePanelWrapper'}>
                <div className={'ContactMePanel'}>
                    <div className={'ContactMeLeftPanel'}>
                        <h1 className={'ContactMeHeader'}>Contact Me</h1>
                        <img className={'contact-me-icon'} src={ 'artifacts/contact-me-icon.svg'} alt={'Contact-Me-Icon'}/>
                    </div>
                        <div className={'ContactMeRightPanel'}>
                            <div className={'ContactMeBoxWrapper' + formVisible}>
                                <form>
                                    <h2 className={'inputHeaders'}>Name</h2>
                                    <div className={'inputContainer'}><input className={'singleRowInput'}
                                                                             placeholder={'John Doe'} type='text'
                                                                             onChange={e => updateForm({fullName: e.target.value.toString()})}/>
                                    </div>
                                    <h2 className={'inputHeaders'}>Email</h2>
                                    <div className={'inputContainer'}><input className={'singleRowInput'}
                                                                             placeholder={'JohnDoe@email.com'} type='text'
                                                                             onChange={e => updateForm({email: e.target.value.toString()})}/>
                                    </div>
                                    <h2 className={'inputHeaders'}>Message</h2>
                                    <div className={'inputContainer'}><textarea className={'messageInput'}
                                                                                placeholder={'Enter Message Here'} rows={2}
                                                                                cols={50}
                                                                                onChange={e => updateForm({message: e.target.value.toString()})}/>
                                    </div>
                                </form>
                                <div className={'ContactMeBottomRightPanel'}>
                                    <ButtonIconComponent buttonText={'Send Message'} src={'artifacts/send-icon.svg'} alt={'send icon'}
                                                         onClick={emailSend}/>
                                </div>
                            </div>

                            <div className={'ContactMeBoxConfirmation' + emailConfirmation}>
                                <p>Thank you for your submission! Can't wait to read it and I'll get back to you ASAP!</p>
                                <img className={'ConfirmationIcon' + emailConfirmation} src={'artifacts/glasses-face.svg'} alt={'icon with glasses'}/>
                            </div>
                    </div>

                </div>
                <div className={'ContactMeFooter'}>
                    <p className={'socials-text'}>Checkout my socials!</p>
                    <div className={'icon-wrapper'}>
                        <a href={'https://www.instagram.com/chipsnsalas/'} className={'socialIcons'}><img src={'artifacts/insta-icon.svg'} alt={'Instagram logo'} className={'icons'}/></a>
                        <a href={'https://www.linkedin.com/in/jesus-salas-a295a07a/'} className={'socialIcons'}><img src={'artifacts/linkedIn-icon.svg'} alt={'LinkedIn logo'} className={'icons'}/></a>
                        <a href={'https://twitter.com/Jesus_Salads'} className={'socialIcons'}><img src={'artifacts/twitter-icon.svg'} alt={'Twitter logo'} className={'icons'}/></a>
                        <a href={'https://github.com/Salas123'} className={'socialIcons'}><img src={'artifacts/github-icon.svg'} alt={'Github logo'} className={'icons'}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMeSection;
