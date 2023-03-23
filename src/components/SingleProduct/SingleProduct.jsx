import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import products from '../data';
import './style.css'
import { GoCalendar } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCCircleFill } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { SocialIcon } from 'react-social-icons';


const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, text, price, location, desc, proDesc } = product;

  const toCart = () => {
    if(!JSON.parse(localStorage.getItem("cart"))){
      localStorage.setItem("cart", JSON.stringify({
        products: [],
        ticketsCount: 0,
        totalPrice: 0
      }))
    }
  const cartList = JSON.parse(localStorage.getItem("cart"))
  cartList.products.push(product)
  cartList.ticketsCount++
  cartList.totalPrice+=product.price
  localStorage.setItem("cart", JSON.stringify(cartList))
  }

  return (
    <Container>
      <Col>
        <Row>
          <div className='product'>
            <img src={image} alt={name} />
            <div>
              <h5 className='product-title'>{name}</h5>
              <p className='product-text'><GoCalendar className="icons-react" />{text}</p>
              <p><BsFillCCircleFill className="icons-react" />{price}</p>
              <p><FaMapMarkerAlt className="icons-react" />{location}</p>

              <div className='d-flex product-button'>

                <Link className='product-link' to='/products'>BACK</Link>
                <Link className='product-op' to='/cart' onClick={toCart}>ПЕРЕЙТИ К ОПЛАТЕ</Link>
              </div>
              <div className='social-links'>
                <h4><FiShare /> &nbsp;Поделиться</h4>
                <div className='some-gap'>
                <SocialIcon url="https://twitter.com" />
                <SocialIcon url="https://facebook.com" />
                <SocialIcon url="https://vk.com" />
                <SocialIcon url="https://instagram.com" />
                <SocialIcon url="https://whatsapp.com" />
                </div>
              </div>
            </div>
          </div>
          <h3 className='product-desc'>{desc}</h3>
          <div className='pro-desc'>
            <p className=''>{proDesc}</p>
          </div>
        </Row>
      </Col>
    </Container>
  )
}

export default SingleProduct
