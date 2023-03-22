import React from 'react';
import Container from '../Container/Container';
import './style.css'

const Contact = () => {
 
  return (
    <>
    <Container>
      <h2 className='title'>Наши контакты</h2>
      <p className='text-1'>
        +996 (555) 42-40-04 <br />
        +996 (501) 50-05-00 <br />
        info@ticket.kg
      </p>
    </Container>
    <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d376.2184764748092!2d74.6097162684245!3d42.87144782802314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1678789190157!5m2!1sru!2skg" width="600"
          height="450"
          className="border-0 w-100"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  )
}

export default Contact
