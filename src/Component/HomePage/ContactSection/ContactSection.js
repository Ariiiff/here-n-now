import React, { useState } from 'react';


const backgroundStyle = {
    backgroundColor : "#eee3e7"
} 


const ContactSection = () => {

    const [contactInfo, setContactInfo] = useState({})

    const handleSubmit = (ev) => {
        ev.preventDefault();

        window.open(`mailto:${contactInfo.emailToSent}?subject=${contactInfo.subject}&body=${contactInfo.body}`);

        setContactInfo({});
        ev.target.reset();
        console.log(contactInfo);
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
                <form action="" onSubmit={handleSubmit} className="py-5 m-2">
                    <div class="form-group">
                        <input type="email" name="emailToSent" className="form-control" placeholder="Your Email Address" onChange={(e) => setContactInfo({...contactInfo, emailToSent: e.target.value})} />
                    </div>
                    <div class="form-group">
                        <input type="text" name="subject" className="form-control" placeholder="Subject" onChange={(e) => setContactInfo({...contactInfo, subject: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <textarea name="body" class="form-control" rows="5" placeholder="Your message" onChange={(e) => setContactInfo({...contactInfo, body: e.target.value})}></textarea>
                    </div>
                    <input href="mailto:arifulhaque02128@gmail.com" type="submit" className="btn btn-dark px-4" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactSection;