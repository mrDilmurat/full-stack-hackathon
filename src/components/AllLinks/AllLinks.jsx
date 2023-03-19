import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './style.css';

const AllLinks = () => {
  return (
    <div className='ba-color'>
      <Container>
        <Link className='all-links' to="/products">ВСЕ</Link>
        <Link className='all-links' to="/concert">КОНЦЕРТЫ</Link>
        <Link className='all-links' to="/spectacle">СПЕКТАКЛИ</Link>
        <Link className='all-links' to="/movies">КИНО</Link>
        <Link className='all-links' to="/seminar">СЕМИНАРЫ</Link>
        <Link className='all-links' to="/children">ДЕТЯМ</Link>
        <Link className='all-links' to="tourism">ТУРИЗМ</Link>
        <Link className='all-links' to="exhibition">ВЫСТАВКИ</Link>
        <Link className='all-links' to="sport">СПОРТ</Link>
        <Link className='all-links' to="various">РАЗНОЕ</Link>
      </Container>

    </div>
  )
}

export default AllLinks
