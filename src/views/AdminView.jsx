import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table, Row, Col, Badge } from 'react-bootstrap';
import { getProductos, crearProducto, eliminarProducto } from '../data/productos'; 

const AdminView = () => {
  const [listaProductos, setListaProductos] = useState([]);
  

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    categoria: '',
    precioTransferencia: '',
    stockOnline: '',
    imagen: ''
  });

  useEffect(() => {
    setListaProductos(getProductos());
  }, []);

  const handleChange = (e) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoProducto.nombre || !nuevoProducto.precioTransferencia) {
      alert('Por favor completa al menos el nombre y el precio.');
      return;
    }

    
    crearProducto({
      nombre: nuevoProducto.nombre,
      categoria: nuevoProducto.categoria || 'General',
      precioTransferencia: Number(nuevoProducto.precioTransferencia),
      stockOnline: Number(nuevoProducto.stockOnline) || 0,
      imagen: nuevoProducto.imagen || 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=800'
    });

    setListaProductos(getProductos()); 
    setNuevoProducto({ nombre: '', categoria: '', precioTransferencia: '', stockOnline: '', imagen: '' });
    alert('¡Producto agregado con éxito al catálogo!');
  };

  const handleDelete = (id) => {
    if(window.confirm('¿Eliminar producto?')) {
        eliminarProducto(id);
        setListaProductos(getProductos());
    }
  };

  return (
    <Container className="mt-4 text-white">
      <h2 className="mb-4" style={{ color: '#e8b74d', fontFamily: 'Orbitron, sans-serif' }}>
        Panel de Administración - Productos
      </h2>

      
      <Form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow mb-5 border border-secondary">
        <h4 className="mb-3 text-warning">Añadir Nuevo Producto</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Nombre del Producto</Form.Label>
              <Form.Control 
                type="text" 
                name="nombre" 
                value={nuevoProducto.nombre} 
                onChange={handleChange} 
                placeholder="Ej. Tarjeta Gráfica RTX" 
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Categoría</Form.Label>
              <Form.Control 
                type="text" 
                name="categoria" 
                value={nuevoProducto.categoria} 
                onChange={handleChange} 
                placeholder="Ej. Componentes de PC" 
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Precio Transferencia ($ CLP)</Form.Label>
              <Form.Control 
                type="number" 
                name="precioTransferencia" 
                value={nuevoProducto.precioTransferencia} 
                onChange={handleChange} 
                placeholder="Ej. 350000" 
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Stock Online</Form.Label>
              <Form.Control 
                type="number" 
                name="stockOnline" 
                value={nuevoProducto.stockOnline} 
                onChange={handleChange} 
                placeholder="Ej. 10" 
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>URL de Imagen</Form.Label>
              <Form.Control 
                type="text" 
                name="imagen" 
                value={nuevoProducto.imagen} 
                onChange={handleChange} 
                placeholder="https://..." 
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="warning" type="submit" className="fw-bold text-dark">
          Guardar Producto
        </Button>
      </Form>

      
      <h4 className="mb-3 text-warning">Inventario Actual</h4>
      <Table striped bordered hover variant="dark" responsive className="align-middle">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((prod) => (
            <tr key={prod.id}>
              <td><Badge bg="secondary">#{prod.id}</Badge></td>
              <td>{prod.nombre}</td>
              <td>{prod.categoria}</td>
              <td>${(prod.precioTransferencia || 0).toLocaleString('es-CL')}</td>
              <td>{prod.stockOnline || 0}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleDelete(prod.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminView;