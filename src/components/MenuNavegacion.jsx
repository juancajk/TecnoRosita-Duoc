import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuNavegacion = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#111116' }} variant="dark" className="border-bottom border-secondary mb-4">
      <Container>
        {/* Usamos as={Link} para conectar Bootstrap con el enrutador de React */}
        <Navbar.Brand as={Link} to="/" style={{ color: '#e8b74d', fontWeight: 'bold', letterSpacing: '1px' }}>
          TecnoRosita
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
            <Nav.Link as={Link} to="/admin">Administración</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavegacion;