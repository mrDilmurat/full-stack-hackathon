import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function Header() {
  return (

    <Navbar collapseOnSelect bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="#" className="me-3 logo">
          <img src="/img/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <div className="d-flex flex-column me-4 contacts">
            <Nav.Link href="tel:+996501500500">+996 (501) 50-05-00</Nav.Link>
            <Nav.Link href="tel:+996555424004">+996 (555) 42-40-04</Nav.Link>
          </div>

          <Form className="d-flex input">
            <Form.Control
              type="search"
              placeholder="поиск концертов, исполнителей, залов..."
              className="me-2 w-100"
              aria-label="Search"
            />
            <Button type="button" className="btn btn-link">
              <i className="bi bi-search"></i>
            </Button>
          </Form>

          <Nav
            className="ms-auto my-2 my-lg-0 snav-links"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >

            <Link className="links" to="/buy">
              Как купить
            </Link>
            <Link className="links" to="/contact">
              Наши контакты
            </Link>
            <Link className="links" to="/cash-register">
              Касса
            </Link>

            <NavDropdown className="links" title="Язык" id="navbarScrollingDropdown">
              <NavDropdown.Item className="drop-menu" href="#action/3.1">Русс</NavDropdown.Item>
              <NavDropdown.Item className="drop-menu" href="#action/3.2">Кыргыз тили</NavDropdown.Item>
              <NavDropdown.Item className="drop-menu" href="#action/3.3">English</NavDropdown.Item>
            </NavDropdown>

            {/* <Link className="links">Язык</Link> */}

            <Link to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg"
                width={46}
                height={21}
                viewBox="0 0 46 21"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M45.44 7.2619C45.28 7.1 45.04 7.01905 44.8 7.01905H38.56V8.6381H43.92L43.68 10.419H38.56V12.0381H43.44L43.2 13.819H28.4L28.16 12.0381H35.84C36.08 12.0381 36.24 11.9571 36.4 11.7952C36.56 11.6333 36.64 11.4714 36.64 11.2286V2.80952C36.64 2.32381 36.32 2 35.84 2C35.36 2 35.04 2.32381 35.04 2.80952V7.01905H26.8C26.56 7.01905 26.32 7.1 26.16 7.2619C26 7.42381 26 7.66667 26 7.90952L26.48 11.1476V11.2286C26.48 11.3095 26.48 11.4714 26.56 11.5524L27.44 18.1905C27.52 18.5952 27.84 18.919 28.24 18.919H43.44C43.84 18.919 44.16 18.5952 44.24 18.1905L45.68 7.90952C45.68 7.66667 45.6 7.50476 45.44 7.2619ZM35.04 8.6381V10.419H28L27.68 8.6381H35.04ZM28.64 15.519L28.88 17.3H42.72L42.96 15.519H28.64Z"
                  fill="#CB3032"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M23.4 10.3L20.1 7C18.7 2.9 14.9 0 10.3 0C4.6 0 0 4.6 0 10.3C0 16 4.6 20.7 10.3 20.7C14.9 20.7 18.7 17.8 20.1 13.7L23.4 10.3Z"
                  fill="#CB3032"
                />
              </svg>
            </Link>
            <Link className="links" to="/login">
              Войти
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default Header;
