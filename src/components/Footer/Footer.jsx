import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "../Container/Container";
import './style.css'
import { Link } from 'react-router-dom';
import React from 'react';


export default function Footer() {

  return (
    <div className="footer-bg">
      <Container>
        <h5 className="title">Способы оплаты</h5>
        <Row>
          <Col>

            <div className="footer-items align-items-center">
              <div className="blog-img"><img src="/img/quickpay.png" alt="" /></div>
              <div className="blog-img"><img src="/img/o-pay.png" alt="" /></div>
              <div className="blog-img"><img src="/img/balance.png" alt="" /></div>
              <div className="blog-img"><img src="/img/elsom.png" alt="" /></div>
              <div className="blog-img"><img src="/img/umai.png" alt="" /></div>
              <div className="blog-img"><img src="/img/m-bank.png" alt="" /></div>
              <div className="blog-img"><img src="/img/visa.png" alt="" /></div>
              <div className="blog-img"><img src="/img/pay24.png" alt="" /></div>
              <div className="blog-img"><img src="/img/mega-pay.png" alt="" /></div>
              <div className="blog-img"><img src="/img/elcat.png" alt="" /></div>
            </div>
            <hr />
            <div className="footer-links">
              <div>
                <h5 className="footer-title">О нас</h5>
                <div className="items-links">
                  <Link className="links" to='/about'>О компании</Link>
                  <Link className="links" to="/contact">Наши контакты</Link>
                  <Link className="links" to="/cash-register">Касса</Link>
                  <Link className="links" to="/offer">Публичная оферта</Link>
                </div>
              </div>

              <div>
                <h5 className="footer-title">Как купить</h5>
                <div className="items-links">
                  <Link className="links" to="/buy">Как купить</Link>
                  <Link className="links" to="/ticket-refund">Возврат билетов</Link>
                </div>
              </div>

              <div>
                <h5 className="footer-title">Организаторам</h5>
                <div className="items-links">
                  <Link className="links" to="/ticket-refund">Реклама для организаторов</Link>
                  <Link className="links" to="/ticket-refund">Логотипы Ticket.kg</Link>
                </div>
              </div>

              <div>
                <h5 className="footer-title">Мы в соцсетях</h5>
                <div className="items-links">
                  <Link className="links" to='https://ru-ru.facebook.com'>Facebook</Link>
                  <Link className="links" to="https://www.instagram.com">Instagram</Link>
                  <Link className="links" to="https://vk.com">Vkontakte</Link>
                </div>
              </div>

              <div>
                <h5 className="footer-title">Наши контакты</h5>
                <div className="items-links">
                  <Link className="links" to="tel:+996501500500">+996 (501) 50-05-00</Link>
                  <Link className="links" to="tel:+996555424004">+996 (555) 42-40-04</Link>
                  <Link className="links" to="tel:+996776424004">+996 (776) 42-40-04</Link>
                  <Link className="links" to="/">info@ticket.kg</Link>
                  <Link className="footer-logo">
                    <img src="/img/footer-logo.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
