import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productosMock } from '../data/productos';
import { getCart, saveCart } from '../data/ventasService';

const ProductDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const producto = productosMock.find((p) => p.id === parseInt(id));

  if (!producto) {
    return (
      <Container className="text-center mt-5 text-white">
        <h2>Producto no encontrado</h2>
        <Button as={Link} to="/" variant="outline-warning" className="mt-3">Volver al Catálogo</Button>
      </Container>
    );
  }

  
  const handleAddToCart = () => {
    const cart = getCart();
    const existingProduct = cart.find(item => item.id === producto.id);
    
    if (existingProduct) {
      existingProduct.qty += 1;
    } else {
      cart.push({ ...producto, qty: 1 });
    }
    
    saveCart(cart);
    navigate('/cart'); 
  };

  return (
    <Container className="mt-5 text-white">
      <Button as={Link} to="/" variant="outline-light" className="mb-4">
        ← Volver al Catálogo
      </Button>
      <Row className="align-items-center bg-dark p-4 rounded shadow border border-secondary">
        <Col md={6} className="text-center">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="img-fluid rounded shadow" 
            style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }} 
          />
        </Col>
        <Col md={6}>
          <span className="text-muted text-uppercase" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>
            {producto.categoria}
          </span>
          <h1 className="fw-bold my-2" style={{ color: '#e8b74d' }}>{producto.nombre}</h1>
          <h3 className="text-warning mb-3">${producto.precio.toLocaleString('es-CL')}</h3>
          
          <p className="text-light mb-4">
            Disfruta del máximo rendimiento con este componente de alta gama para tu setup gamer. Producto certificado con garantía TecnoRosita.
          </p>

          <div className="mb-4">
            {producto.stock === 0 ? (
              <Badge bg="danger" className="fs-6 p-2">Agotado</Badge>
            ) : (
              <Badge bg="success" className="fs-6 p-2">Stock disponible: {producto.stock} unidades</Badge>
            )}
          </div>

          <Button 
            variant={producto.stock === 0 ? "secondary" : "warning"} 
            size="lg" 
            className="w-100 fw-bold text-dark"
            disabled={producto.stock === 0}
            onClick={handleAddToCart} 
          >
            {producto.stock === 0 ? "Sin Stock" : "Añadir al Carrito"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailView;