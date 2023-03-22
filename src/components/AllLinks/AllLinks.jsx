import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import Container from '../Container/Container';
import products from '../data'
import { GoCalendar } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCCircleFill } from "react-icons/bs";


import './style.css';

const AllLinks = () => {

  // Category

  const [data, setData] = useState(products)

  const filterResult = (catItem) => {
    const result = products.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result)
  }

  // Search

  const [searchParams, setSearchParams] = useSearchParams();

  const Query = searchParams.get('product') || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;

    setSearchParams({ product: query })
  }

  

  return (
    <div className='ba-color'>
      <Container>
        {/* <h4 className="title">{`${Category.name}`}</h4> */}
   
          <div className='all-links'>
            <Link className='all-links' onClick={() => setData(products)}>ВСЕ</Link>
            <Link className='all-links' onClick={() => filterResult('Концерты')}>КОНЦЕРТЫ</Link>
            <Link className='all-links' onClick={() => filterResult('Спектакли')}>СПЕКТАКЛИ</Link>
            <Link className='all-links' onClick={() => filterResult('Кино')}>КИНО</Link>
            <Link className='all-links' onClick={() => filterResult('Семинары')}>СЕМИНАРЫ</Link>
            <Link className='all-links' onClick={() => filterResult('Детям')}>ДЕТЯМ</Link>
            <Link className='all-links' onClick={() => filterResult('Выставки')}>ВЫСТАВКИ</Link>
            <Link className='all-links' onClick={() => filterResult('Разное')}>РАЗНОЕ</Link>
          </div>
    



        <form className='search-form' autoComplete='off' onSubmit={handleSubmit}>
          <input className='search-products' type='search' name='search' placeholder='Search' />
          <input className='btn-send' type='submit' name='Search' />
        </form>

        <div className='products d-flex flex-wrap'>
          {data.filter(product => product.name.toLowerCase().includes(Query)).map((product) => {
            return (
              <Card className='products-card' style={{ width: '14rem' }} key={product.id}>
                <Card.Img variant="top" className='product-img' src={`${product.image}`} alt="image" />

                <Link className='products-link' to={`/products/${product.id}`}>КУПИТЬ БИЛЕТ</Link>

                <h6 className='products-title'>{product.name}</h6>
                <Card.Body className=''>
                  <p className='products-text'><GoCalendar className="icons-react" />{`${product.text}`}</p>
                  <p className='products-text'><BsFillCCircleFill className="icons-react" />{`${product.price}`}</p>
                  <p className='products-text'><FaMapMarkerAlt className="icons-react" />{`${product.location}`}</p>
                </Card.Body>
                <Card.Img className='red-ok' src="/img/red-ok.png" alt="" />
              </Card>
            )
          })}
        </div>
      </Container>

    </div>
  )
}

export default AllLinks
