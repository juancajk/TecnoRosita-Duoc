import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import CheckoutView from '../views/CheckoutView';

const renderWithRouter = (component) => render(<BrowserRouter>{component}</BrowserRouter>);

describe('Pruebas Unitarias - Módulo Ventas y Usuarios', () => {
    
    beforeEach(() => {
        localStorage.clear(); 
    });

    it('1. Debe renderizar el formulario de Checkout correctamente', () => {
        renderWithRouter(<CheckoutView />);
        expect(screen.getByText('Finalizar Compra')).toBeInTheDocument();
    });

    it('2. El estado del input "Nombre" debe actualizarse al escribir', () => {
        renderWithRouter(<CheckoutView />);
        const inputNombre = screen.getByLabelText('Nombre Completo');
        
        fireEvent.change(inputNombre, { target: { value: 'Juan Carlos' } });
        expect(inputNombre.value).toBe('Juan Carlos');
    });

    it('3. El estado del input "Dirección" debe actualizarse al escribir', () => {
        renderWithRouter(<CheckoutView />);
        const inputDireccion = screen.getByLabelText('Dirección de Envío');
        
        fireEvent.change(inputDireccion, { target: { value: 'La Granja' } });
        expect(inputDireccion.value).toBe('La Granja');
    });

    it('4. Debe calcular el total leyendo el estado del localStorage (Mock)', () => {
        const mockCart = [{ id: 1, nombre: 'Monitor', precio: 100000, qty: 2 }];
        localStorage.setItem('tecnorosita_cart', JSON.stringify(mockCart));

        renderWithRouter(<CheckoutView />);
        expect(screen.getByText('Pagar $200.000')).toBeInTheDocument();
    });

    it('5. Debe prevenir el envío si los campos están vacíos', () => {
        renderWithRouter(<CheckoutView />);
        const botonPagar = screen.getByText(/Pagar/i);
        
        fireEvent.click(botonPagar);
        expect(screen.getByTestId('checkout-form')).toBeInTheDocument();
    });
});