import React, { useState, useEffect } from 'react';
import { getOrders, getUsers } from '../data/ventasService';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

export default function AdminDashboardView() {
    const [ordenes, setOrdenes] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        setOrdenes(getOrders());
        setUsuarios(getUsers());
    }, []);

    const ingresosTotales = ordenes.reduce((acc, ord) => acc + ord.total, 0);

    return (
        <Container className="mt-5 text-white">
            <h2>Dashboard de Ventas</h2>
            <Row className="mb-4 text-dark">
                <Col md={6}>
                    <Card className="bg-warning">
                        <Card.Body>
                            <Card.Title>Ventas Totales</Card.Title>
                            <h3>${ingresosTotales.toLocaleString('es-CL')}</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="bg-info">
                        <Card.Body>
                            <Card.Title>Usuarios Registrados</Card.Title>
                            <h3>{usuarios.length}</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h4>Últimas Órdenes</h4>
            <Table variant="dark" striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID Orden</th>
                        <th>Cliente</th>
                        <th>Total</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {ordenes.map(ord => (
                        <tr key={ord.id}>
                            <td>{ord.id}</td>
                            <td>{ord.usuario.nombre}</td>
                            <td>${ord.total.toLocaleString('es-CL')}</td>
                            <td className="text-success">Completada</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}