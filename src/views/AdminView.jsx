import React, { useState } from 'react';
import { Container, Form, Button, Table, Row, Col } from 'react-bootstrap';
import { productosMock } from '../data/productos';

const AdminView = () => {
  // Estado local para manejar la lista de productos
  const [listaProductos, setListaProductos] = useState(productosMock);
  
  // Estado para el formulario de nuevo producto
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    stock: '',
    imagen: ''
  });

  // Capturar lo que el usuario escribe en el formulario
  const handleChange = (e) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value
    });
  };

  // Función para agregar un producto al catálogo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoProducto.nombre || !nuevoProducto.precio) {
      alert('Por favor completa al menos el nombre y el precio.');
      return;
    }

    const productoAgregado = {
      id: listaProductos.length + 1,
      nombre: nuevoProducto.nombre,
      categoria: nuevoProducto.categoria || 'General',
      precio: Number(nuevoProducto.precio),
      stock: Number(nuevoProducto.stock) || 0,
      imagen: nuevoProducto.imagen || 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=800'
    };

    setListaProductos([...listaProductos, productoAgregado]);
    setNuevoProducto({ nombre: '', categoria: '', precio: '', stock: '', imagen: '' });
    alert('¡Producto agregado con éxito al catálogo!');
  };

  // Función para eliminar un producto
  const handleDelete = (id) => {
    const filtrados = listaProductos.filter(p => p.id !== id);
    setListaProductos(filtrados);
  };

  return (
    <Container className="mt-4 text-white">
      <h2 className="mb-4" style={{ color: '#e8b74d', fontFamily: 'Orbitron, sans-serif' }}>
        Panel de Administración - Productos
      </h2>

      {/* Formulario para agregar productos */}
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
                placeholder="Ej. Tarjetas de Video" 
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Precio ($ CLP)</Form.Label>
              <Form.Control 
                type="number" 
                name="precio" 
                value={nuevoProducto.precio} 
                onChange={handleChange} 
                placeholder="Ej. 350000" 
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control 
                type="number" 
                name="stock" 
                value={nuevoProducto.stock} 
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

      {/* Tabla de administración de productos existentes */}
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
              <td>{prod.id}</td>
              <td>{prod.nombre}</td>
              <td>{prod.categoria}</td>
              <td>${prod.precio.toLocaleString('es-CL')}</td>
              <td>{prod.stock}</td>
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