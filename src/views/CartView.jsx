import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, saveCart } from '../data/ventasService';
import { Container, Table, Button, Card } from 'react-bootstrap';

export default function CartView() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { 
        setCart(getCart()); 
    }, []);

    const removeProduct = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        saveCart(newCart);
    };

    const total = cart.reduce((acc, item) => acc + (item.precio * item.qty), 0);

    return (
        <Container className="mt-5 text-white">
            <h2>Mi Carrito</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <Card className="bg-dark text-white p-3 border-secondary">
                    <Table variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.qty}</td>
                                    <td>${(item.precio * item.qty).toLocaleString('es-CL')}</td>
                                    <td>
                                        <Button variant="danger" size="sm" onClick={() => removeProduct(item.id)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <h4>Total: ${total.toLocaleString('es-CL')}</h4>
                        <Button variant="success" onClick={() => navigate('/checkout')}>
                            Ir al Pago
                        </Button>
                    </div>
                </Card>
            )}
        </Container>
    );
}