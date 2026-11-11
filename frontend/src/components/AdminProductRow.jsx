import { Button } from 'react-bootstrap';

const AdminProductRow = ({ producto, esVendedor }) => {
    return (
        <tr>
            <td className="text-white text-center fw-bold">{producto.id}</td>
            <td className="text-white">{producto.nombre}</td>
            <td className="text-white">${producto.precio?.toLocaleString('es-CL')}</td>
            <td className="text-center">
                <span className={producto.stock === 0 ? "badge bg-danger fw-bold fs-6" : "badge bg-success text-dark fs-6"}>
                    {producto.stock}
                </span>
            </td>
            
            
            {!esVendedor && (
                <td className="text-center">
                    <Button variant="outline-warning" size="sm" className="me-2">Editar</Button>
                    <Button variant="outline-danger" size="sm">Eliminar</Button>
                </td>
            )}
        </tr>
    );
};

export default AdminProductRow;

