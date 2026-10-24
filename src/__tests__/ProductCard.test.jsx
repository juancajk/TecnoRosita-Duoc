import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ProductCard from '../components/ProductCard.jsx';

// Objeto de producto normal de prueba
const productoPrueba = {
  id: 1,
  nombre: 'Teclado Mecánico RGB Gamer',
  categoria: 'Teclados',
  precio: 120000,
  stock: 15,
  imagen: 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=800'
};

// Objeto de producto sin stock para probar renderizado condicional
const productoAgotado = {
  id: 2,
  nombre: 'Mouse Agotado',
  categoria: 'Mouse',
  precio: 29990,
  stock: 0,
  imagen: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800'
};

describe('Pruebas Unitarias del Componente ProductCard - Módulo Products & Catalog', () => {

  test('1. Debe renderizar correctamente el nombre del producto', () => {
    render(
      <BrowserRouter>
        <ProductCard producto={productoPrueba} />
      </BrowserRouter>
    );
    expect(screen.getByText('Teclado Mecánico RGB Gamer')).toBeInTheDocument();
  });

  test('2. Debe mostrar la categoría del producto', () => {
    render(
      <BrowserRouter>
        <ProductCard producto={productoPrueba} />
      </BrowserRouter>
    );
    expect(screen.getByText('Teclados')).toBeInTheDocument();
  });

  test('3. Debe mostrar el precio formateado en pesos chilenos', () => {
    render(
      <BrowserRouter>
        <ProductCard producto={productoPrueba} />
      </BrowserRouter>
    );
    expect(screen.getByText('$120.000')).toBeInTheDocument();
  });

  test('4. Debe mostrar la insignia de stock disponible cuando hay unidades', () => {
    render(
      <BrowserRouter>
        <ProductCard producto={productoPrueba} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Stock disponible: 15/i)).toBeInTheDocument();
  });

  test('5. Debe deshabilitar el botón y mostrar "Sin Stock" cuando el stock es igual a 0', () => {
    render(
      <BrowserRouter>
        <ProductCard producto={productoAgotado} />
      </BrowserRouter>
    );
    const boton = screen.getByRole('button', { name: /Sin Stock/i });
    expect(boton).toBeInTheDocument();
    expect(boton).toBeDisabled();
  });

});