import React from 'react';
import Title from '../../shared/Title/Title';
import ContactCards from './ContactCards';

const ContactInfo = () => {
    return (
        <div>
            <Title title="our location" subtitle="Contact Us" />
            <ContactCards />
        </div>
    );
};

export default ContactInfo;