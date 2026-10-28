import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuNavegacion = () => {
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="border-bottom border-secondary mb-4"
      style={{ 
        position: 'relative', 
        zIndex: 1000, 
        width: '100%' 
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: '#e8b74d', fontWeight: 'bold', letterSpacing: '1px' }}>
          TecnoRosita
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-tecnorosita" />
        <Navbar.Collapse id="menu-tecnorosita">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/admin">Administración</Nav.Link>
            <Nav.Link as={Link} to="/carrito" style={{ color: '#e8b74d', fontWeight: 'bold' }}>🛒 Mi Carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavegacion;