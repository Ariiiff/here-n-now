import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const backgroundStyle = {
    backgroundColor : "#eee3e7"
} 


const ContactSection = () => {

    const [contactInfo, setContactInfo] = useState({})

    // const sendEmail = (ev) => {
    //     ev.preventDefault();

    //     window.open(`mailto:arifulhaque29@gmail.com?subject=${contactInfo.subject}&body=${contactInfo.message}`);

    //     setContactInfo({});
    //     ev.target.reset();
    //     console.log(contactInfo);
    // }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_3suthib', e.target, 'user_Og3NEBSGR5qJcdoZVtdRv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <section id='contact' style={backgroundStyle} className="row">
            <div className="col-md-5 offset-md-1">
                <div className="py-5 m-2">
                    <h2 className="my-4">Let us handle your <br/>project, professionally.</h2>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, magni amet mollitia minus totam aliquam omnis debitis tempore soluta doloribus.</small>
                </div>
            </div>
            <div className="col-md-6">
                <form action="" onSubmit={sendEmail} className="py-5 m-2">
                    <div class="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})} />
                    </div>
                    <div class="form-group">
                        <input type="text" name="email" className="form-control" placeholder="Your Email" onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})} />
                    </div>
                    {/* <div class="form-group">
                        <input type="email" name="emailToSent" className="form-control" placeholder="Your Email Address" onChange={(e) => setContactInfo({...contactInfo, emailToSent: e.target.value})} />
                    </div> */}
                    <div class="form-group">
                        <input type="text" name="subject" className="form-control" placeholder="Subject" onChange={(e) => setContactInfo({...contactInfo, subject: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <textarea name="message" class="form-control" rows="5" placeholder="Your message" onChange={(e) => setContactInfo({...contactInfo, message: e.target.value})}></textarea>
                    </div>
                    <input type="submit" className="btn btn-dark px-4" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactSection;