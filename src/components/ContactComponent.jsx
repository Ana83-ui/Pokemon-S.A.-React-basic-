import React from 'react'

const ContactComponent = () => {
  return (
    <div className='contact'>
      <div className='input'>
        <span className='title'>Nombre: </span>
        <span>Ana</span>
      </div>
      <div className='input'>
        <span className='title'>Apellido: </span>
        <span>Molina</span>
      </div>
      <div className='input'>
        <span className='title'>Ciudad: </span>
        <span>Sevilla</span>
      </div>
    </div>
  )
}

export default ContactComponent
