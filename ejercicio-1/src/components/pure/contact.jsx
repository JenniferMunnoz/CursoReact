import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({ elContact }) {

    const [connected, setConnected] = useState(elContact.connected);

    const toggleConnected = () => {
        setConnected (!connected);
    }
    return (
        <div>
            <h2>Nombre: { elContact.name } { elContact.surname }</h2>
            <p><a href='mailto:{propContact.email}'>{ elContact.email }</a></p>
            <p><strong>Conectado: { connected ? 'En Línea' : 'No disponible' }</strong></p>
            <button onClick={toggleConnected}>{ connected ? 'Desconectar' : 'Conectar' }</button> 
        </div>
    )
}


ContactComponent.propTypes = {
    elContact: PropTypes.instanceOf(Contact)
}

export default ContactComponent
