import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function BlogView() {
    const articulos = [
        {
            id: 1,
            titulo: 'Las mejores consolas de la temporada 2026',
            categoria: 'Consolas',
            imagen: 'https://images.unsplash.com/photo-1612287233202-b51c3ed6f9c4?auto=format&fit=crop&w=600&q=80',
            resumen: 'Analizamos el rendimiento en 4K y la tasa de refresco de las consolas de última generación disponibles en el mercado.'
        },
        {
            id: 2,
            titulo: 'Todo lo que debes saber antes de comprar un iPhone reacondicionado',
            categoria: 'iPhone',
            imagen: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80',
            resumen: 'Descubre los estándares de batería, certificación y garantía que ofrecemos en nuestra línea de smartphones.'
        },
        {
            id: 3,
            titulo: 'Notebooks Gamer vs. Escritorio: ¿Cuál elegir?',
            categoria: 'Notebooks',
            imagen: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80',
            resumen: 'Comparamos la potencia térmica, capacidad de actualización y movilidad para ayudarte a decidir tu próxima inversión.'
        }
    ];

    return (
        <Container className="mt-4 mb-5 text-white">
            <div className="text-center mb-5">
                <h2 className="fw-bold" style={{ color: '#e8b74d', fontFamily: 'Orbitron, sans-serif' }}>Blog TecnoRosita</h2>
                <p className="text-muted">Noticias, guías de compra y análisis del mundo tecnológico de alta gama.</p>
            </div>

            <Row className="g-4">
                {articulos.map(art => (
                    <Col md={4} key={art.id}>
                        <Card className="bg-dark text-white border-secondary h-150 shadow-sm">
                            <Card.Img variant="top" src={art.imagen} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body className="d-flex flex-column">
                                <span className="text-warning small fw-bold mb-2">{art.categoria.toUpperCase()}</span>
                                <Card.Title className="fw-bold fs-5 mb-3">{art.titulo}</Card.Title>
                                <Card.Text className="text-muted small mb-4">{art.resumen}</Card.Text>
                                <Button variant="outline-light" className="mt-auto border-secondary w-100">
                                    Leer artículo completo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}