import React from 'react';
import Container from '../Container/Container';
import './style.css'

const Cart = () => {

  const cartStorage = JSON.parse(localStorage.getItem("cart"))

  console.log(cartStorage);

  //custom
  const deleteCart = (id) => {
    const deletedObj = cartStorage.products.find(item => item.id == id)
    cartStorage.totalPrice -= deletedObj.price
    const cartUpdated = cartStorage.products.filter((elem) => elem.id !== id);
    cartStorage.products = cartUpdated
    cartStorage.ticketsCount --;
    localStorage.setItem("cart", JSON.stringify(cartStorage))
    window.location.reload()
  }

  return (
    <Container>
      <h1 className='cart-cor'>КОРЗИНА</h1><hr/>
      {cartStorage.products?.map(item => (
        <div key={item.id}>
          <h1 className='cart-name'>{item.name}</h1>
          <h4>Стоимость: {item.price} kg;</h4>
          <img className='cart-img' src={item.image} alt="" /><br /><br />
          <button className='cart-btn' onClick={() => deleteCart(item.id)}>delete</button>
        </div>
      ))}
      <hr />
      <h4 className='cart-cor'>KОЛ: {cartStorage.ticketsCount}</h4> <hr />
      <h4 className='cart-cor'>ОБШАЯ СУМА: {cartStorage.totalPrice}</h4> <hr />

    </Container>
  )
}

export default Cart
