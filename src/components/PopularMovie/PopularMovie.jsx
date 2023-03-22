import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';


const PopularMovie = () => {

  const [popular, setPopular] = useState([])

  // useEffect(() => {
  //   fetchPopular();
  // }, []);

  // const fetchPopular = async () => {
  //   const data = await fetch('');
  //   const movies = await data.json();
  //   console.log(movies);
  //   setPopular(movies.results)
  // }
  return (
    <Container>
      <h4>Hello</h4>
    </Container>
  )
}

export default PopularMovie
