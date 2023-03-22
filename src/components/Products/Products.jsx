import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import products from "../data";
import "./style.css";
import { GoCalendar } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCCircleFill } from "react-icons/bs";
import Container from "../Container/Container";

import { useState, useEffect } from "react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("product") || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;

    setSearchParams({ product: query });
  };

  return (
    <>
      <Container>
        <h4 className="title">ВСЕ МЕРОПРИЯТИЯ</h4>

        <form
          className="search-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            className="search-products"
            type="search"
            name="search"
            placeholder="Search"
          />
          <input className="btn-send" type="submit" name="Search" />
        </form>
        <Row>
          <Col xs={12}>
            <div className="products d-flex flex-wrap">
              {products
                .filter((product) =>
                  product.name.toLowerCase().includes(postQuery)
                )
                .map((product) => {
                  return (
                    <Card
                      className="products-card"
                      style={{ width: "14rem" }}
                      key={product.id}
                    >
                      <Card.Img
                        variant="top"
                        className="product-img"
                        src={`${product.image}`}
                        alt="image"
                      />

                      <Link
                        className="products-link"
                        to={`/products/${product.id}`}
                      >
                        КУПИТЬ БИЛЕТ
                      </Link>

                      <h6 className="products-title">{product.name}</h6>
                      <Card.Body className="">
                        <p className="products-text">
                          <GoCalendar className="icons-react" />
                          {`${product.text}`}
                        </p>
                        <p className="products-text">
                          <BsFillCCircleFill className="icons-react" />
                          {`${product.price}`}
                        </p>
                        <p className="products-text">
                          <FaMapMarkerAlt className="icons-react" />
                          {`${product.location}`}
                        </p>
                      </Card.Body>
                      <Card.Img
                        className="red-ok"
                        src="/img/red-ok.png"
                        alt=""
                      />
                    </Card>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
