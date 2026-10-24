import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getCart, saveCart } from '../data/ventasService';

const ProductCard = ({ producto }) => {
  const navigate = useNavigate();

  
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
    <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: '#1a1a22', color: '#eceae3' }}>
      <Card.Img variant="top" src={producto.imagen} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Text className="text-muted mb-1" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          {producto.categoria}
        </Card.Text>
        <Card.Title className="fw-bold fs-5 mb-3">{producto.nombre}</Card.Title>
        <Card.Text className="fw-bold fs-4" style={{ color: '#e8b74d' }}>
          ${producto.precio.toLocaleString('es-CL')}
        </Card.Text>
        
        <div className="mb-3">
          {producto.stock === 0 ? (
            <Badge bg="danger">Agotado</Badge>
          ) : (
            <Badge bg="success">Stock disponible: {producto.stock}</Badge>
          )}
        </div>

        <Button 
          as={Link} 
          to={`/producto/${producto.id}`} 
          variant="outline-light" 
          className="mb-2 w-100 fw-bold"
        >
          Ver Detalle
        </Button>

        <Button 
          variant={producto.stock === 0 ? "secondary" : "outline-warning"} 
          className="mt-auto w-100 fw-bold"
          disabled={producto.stock === 0}
          onClick={handleAddToCart}
        >
          {producto.stock === 0 ? "Sin Stock" : "Añadir al carrito"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;