import React from 'react';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';
import bannerImg from '../../assets/menu/banner.jpg'
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div>
            <SharedBanner img={bannerImg} title="contact us" description="WOULD YOU LIKE TO TRY A DISH??" pyl="16" mt="8%" />
            <ContactInfo />
            <ContactForm />
        </div>
    );
};

export default Contact;