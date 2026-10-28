import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getCart, saveCart } from '../data/ventasService';

export default function ProductCard({ producto }) {
    const navigate = useNavigate();

    const stockActual = producto.stockOnline !== undefined ? producto.stockOnline : (producto.stock || 0);
    const sinStock = stockActual <= 0;

    const handleAddToCart = () => {
        if (sinStock) return;
        const cart = getCart();
        const existing = cart.find(item => item.id === producto.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...producto, qty: 1 });
        }
        saveCart(cart);
        alert('Producto añadido al carrito con éxito'); 
    };

    return (
        <Card className="bg-dark text-white shadow-sm h-100 border-secondary">
            <Card.Img 
                variant="top" 
                src={producto.imagen} 
                style={{ height: '200px', objectFit: 'cover' }} 
                alt={producto.nombre}
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80';
                }}
            />
            
            <Card.Body className="d-flex flex-column">
                
                <div className="text-muted small mb-1" style={{ letterSpacing: '1px' }}>
                    {producto.categoria || 'Teclados'}
                </div>
                
                <Card.Title className="fs-6 fw-bold mb-3" style={{ minHeight: '48px' }}>
                    {producto.nombre}
                </Card.Title>
                
                <h4 className="text-warning mb-3">
                    ${(producto.precioTransferencia || producto.precio || 0).toLocaleString('es-CL')}
                </h4>
                
                <div className="mb-3">
                    <Badge bg={sinStock ? 'danger' : 'success'}>
                        {sinStock ? 'Agotado' : `Stock disponible: ${stockActual}`}
                    </Badge>
                </div>

                <div className="mt-auto d-grid gap-2">
                    <Button 
                        variant="outline-light" 
                        onClick={() => navigate(`/producto/${producto.id}`)}
                    >
                        Ver Detalle
                    </Button>
                    <Button 
                        variant={sinStock ? 'secondary' : 'warning'} 
                        className={`fw-bold ${sinStock ? 'text-white' : 'text-dark'}`}
                        onClick={handleAddToCart}
                        disabled={sinStock}
                    >
                        {sinStock ? 'Sin Stock' : 'Añadir al carrito'}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}