import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';
// import PropTypes from 'prop-types'

const ContactListComponent = () => {

    const defaultContact = new Contact ('Jennifer', 'Muñoz', 'jennifer.munnoz@gmail.com', true);
    return (
        <div>
            <h1>Mi lista de contactos</h1>
            <ContactComponent elContact={ defaultContact }></ContactComponent>
        </div>
    )
}

// contacts_list.propTypes = {}

export default ContactListComponent;
