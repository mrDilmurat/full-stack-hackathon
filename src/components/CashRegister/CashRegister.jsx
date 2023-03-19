import React from 'react'
import Container from '../Container/Container'

const CashRegister = () => {
  return (
    <Container>
      <h2 className='title'>Билетные кассы</h2>
      <p>г. Бишкек</p>
      <p className='text-1'>1) пр. Чуй пересекает ул. Абдрахманова, <br />
        (точка продаж, остановка напротив ТК Берен Голд)</p>

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
    </Container>
  )
}

export default CashRegister
