import React from 'react';
import { Col, Row } from 'react-bootstrap'
import Container from '../Container/Container'

const TicketRefund = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Возврат билетов</h2>
          <p>Уважаемые зрители!</p>
          <p>Для осуществления возврата или обмена билета вы можете обратиться в офис Компании по адресу: Бизнес-центр «Мото» (г. Бишкек, ул. Токтогула, 87 пересекает ?пр. Юсупа Абдрахманова) 2й этаж кабинет 21 (при себе иметь паспорт и распечатанные билеты).
            Обмен (замена) билета или билетов (далее «билет») осуществляется через возврат билета.</p>
          <p>Обращаем ваше внимание, что при возврате билета с помощью сервиса Компании взимается комиссия от номинальной стоимости билета.</p>
          <p><b>Сумма комиссии:</b><br />
            - если обмен или возврат билета осуществляется при обращении покупателя за возвратом не менее чем за 5 (пять) рабочих дней до дня мероприятия комиссия составит 10 (десять) % от номинальной стоимости билета,</p>
          <p>- если обмен или возврат билета осуществляется при обращении покупателя менее чем за 5 (пять) рабочих дней, но не менее чем за 3 (три) рабочих дня комиссия составит 20 (двадцать) % от номинальной стоимости билета.</p>
          <p>Обмен или возврат билета не осуществляется за 3 (три) рабочих дня до мероприятия.</p>
          <p>Возврат билета осуществляется наличными средствами по средам и пятницам с 10:00 до 19:00 (по предварительному голосовому уведомлению по телефону +996 501 500 500).</p>
          <p>В случае, если обмен или возврат билета взял на себя Организатор мероприятия, просьба связаться с Организатором мероприятия.</p>
          <p>Организатор мероприятия оставляет за собой право на отказ в возврате денежных средств Покупателю, в случае если билет имеет физические повреждения (в том числе, но не ограничиваясь: надрывы, подчистки, отметки, изгибы, исправления, надписи, нанесенные не Организатором, отсутствие корешка «контроля» и т.п.).</p>

        </Col>
      </Row>
    </Container>
  )
}

export default TicketRefund
