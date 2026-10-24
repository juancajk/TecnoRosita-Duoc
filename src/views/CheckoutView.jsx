import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, clearCart, saveOrder, saveUser } from '../data/ventasService';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';

export default function CheckoutView() {
    const [cart, setCart] = useState([]);
    const [formData, setFormData] = useState({ nombre: '', email: '', direccion: '' });
    const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });
    const navigate = useNavigate();

    useEffect(() => {
        setCart(getCart());
    }, []);

    const totalCalculado = cart.reduce((acc, item) => acc + (item.precio * item.qty), 0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (cart.length === 0) {
            setMensaje({ texto: 'No puedes procesar un carrito vacío.', tipo: 'danger' });
            return;
        }
        
        saveUser(formData);
        saveOrder({
            usuario: formData,
            productos: cart,
            total: totalCalculado
        });

        clearCart();
        setCart([]);
        setMensaje({ texto: '¡Compra realizada con éxito! Redirigiendo...', tipo: 'success' });
        
        setTimeout(() => navigate('/dashboard'), 2000);
    };

    return (
        <Container className="mt-5 text-white" style={{ maxWidth: '600px' }}>
            <Card className="bg-dark text-white shadow-sm border-secondary">
                <Card.Body>
                    
                    <Card.Title className="mb-4 fs-3">Finalizar Compra</Card.Title>
                    
                    {mensaje.texto && <Alert variant={mensaje.tipo}>{mensaje.texto}</Alert>}
                    
                    <Form onSubmit={handleSubmit} data-testid="checkout-form">
                        
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nombre" 
                                placeholder="Ej: Juan Pérez" 
                                required 
                                onChange={handleChange} 
                                className="bg-secondary text-white border-dark"
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email" 
                                placeholder="correo@ejemplo.com" 
                                required 
                                onChange={handleChange} 
                                className="bg-secondary text-white border-dark"
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-4" controlId="direccion">
                            <Form.Label>Dirección de Envío</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="direccion" 
                                placeholder="Calle, Número, Ciudad" 
                                required 
                                onChange={handleChange} 
                                className="bg-secondary text-white border-dark"
                            />
                        </Form.Group>
                        
                        <div className="d-grid">
                            <Button variant="success" type="submit" size="lg">
                                {`Pagar $${totalCalculado.toLocaleString('es-CL')}`}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}