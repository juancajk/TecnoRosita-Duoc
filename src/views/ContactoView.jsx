import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

export default function ContactoView() {
    const [enviado, setEnviado] = useState(false);
    const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
        setFormData({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <Container className="mt-4 mb-5 text-white" style={{ maxWidth: '700px' }}>
            <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ color: '#e8b74d', fontFamily: 'Orbitron, sans-serif' }}>Contacto TecnoRosita</h2>
                <p className="text-muted">¿Tienes dudas con tu pedido o requieres soporte técnico especializado? Escríbenos.</p>
            </div>

            <Card className="bg-dark text-white border-secondary p-4 shadow-sm">
                {enviado && (
                    <Alert variant="success" className="bg-success text-white border-0 mb-4">
                        ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo en menos de 24 horas.
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label className="small text-muted">Nombre Completo</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="nombre" 
                            value={formData.nombre} 
                            onChange={handleChange} 
                            placeholder="Juan Carlos Alvarado" 
                            required 
                            className="bg-secondary text-white border-0"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="small text-muted">Correo Electrónico</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="correo@duocuc.cl" 
                            required 
                            className="bg-secondary text-white border-0"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label className="small text-muted">Mensaje o Consulta</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={4} 
                            name="mensaje" 
                            value={formData.mensaje} 
                            onChange={handleChange} 
                            placeholder="Escribe tu consulta aquí..." 
                            required 
                            className="bg-secondary text-white border-0"
                        />
                    </Form.Group>

                    <Button variant="warning" type="submit" className="w-100 text-dark fw-bold py-2">
                        Enviar Mensaje ✉️
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}