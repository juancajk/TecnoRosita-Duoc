import React, { useContext, useState, useEffect } from 'react';
import { Container, Button, Table, Card } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { getProductos } from '../data/productos';
import AdminProductRow from '../components/AdminProductRow'; 

const AdminView = () => {
    const { user } = useContext(AuthContext); 
    const esVendedor = user?.rol === 'VENDEDOR';
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(getProductos());
    }, []);

    return (
        <Container className="mt-5 mb-5 text-white">
            <Card className="bg-dark border-secondary shadow-lg mb-4 p-3">
                <Card.Body className="text-center">
                    <h1 className="text-warning fw-bold" style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '2px 2px 5px rgba(0,0,0,0.8)', fontSize: '2.8rem' }}>
                         Panel de Administración
                    </h1>
                    <p className="text-info fs-5 mb-0 fw-bold">
                        Módulo de Gestión de Inventario
                    </p>
                </Card.Body>
            </Card>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-light mb-0">Listado de Productos</h4>
                
                
                {!esVendedor && (
                    <Button variant="success" className="fw-bold text-dark shadow-sm">
                        + Nuevo Producto
                    </Button>
                )}
            </div>

            <Table striped bordered hover variant="dark" className="border-secondary shadow-lg">
                <thead>
                    <tr>
                        <th className="text-warning text-center">ID</th>
                        <th className="text-warning">Nombre</th>
                        <th className="text-warning">Precio</th>
                        <th className="text-warning text-center">Stock</th>
                        
                        {!esVendedor && <th className="text-warning text-center">Acciones</th>}
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod) => (
                        <AdminProductRow key={prod.id} producto={prod} esVendedor={esVendedor} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AdminView;

