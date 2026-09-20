
Documento ERS (Especificación de Requisitos de Software) - TecnoRosita


1. Introducción
1.1. Propósito
El propósito de este documento ERS es definir los requerimientos técnicos y funcionales para el desarrollo del frontend de la tienda online "TecnoRosita". Este documento establece las directrices para el equipo de desarrollo, asegurando la correcta implementación de la interfaz de usuario, la lógica de compras y la validación de datos según los estándares exigidos para el proyecto.


1.2. Ámbito del Sistema
El sistema "TecnoRosita" es una plataforma e-commerce especializada en hardware y tecnología.

Lo que hará: Proveerá un catálogo dinámico de productos renderizado mediante JavaScript, un sistema de carrito de compras que preserva la sesión mediante localStorage, y formularios con validación en tiempo real (DOM) que restringen el ingreso exclusivo a correos institucionales o permitidos (@duoc.cl, @gmail.com).

Objetivos: Garantizar una navegación fluida, estructurada semánticamente bajo HTML5, y estilizada externamente con un diseño de alta gama que mejore la retención del usuario.



2. Descripción General
2.1. Perspectiva del Producto
El frontend de TecnoRosita funciona como una aplicación del lado del cliente (Client-Side). Se integra lógicamente con un panel administrativo paralelo gestionado por el equipo. La plataforma no requiere de bases de datos externas en esta iteración, ya que confía en las capacidades de almacenamiento local del navegador del cliente para gestionar la lógica de selección de productos.


2.2. Funciones del Producto

Visualización de Catálogo: Inyección estructurada de arreglos de datos (productos, precios, imágenes) directamente en la interfaz.

Gestión de Compras: Capacidad de añadir productos al carrito, contabilizar el total de ítems y persistir esta información al recargar la página.

Soporte Multimedial: Integración nativa de videos promocionales embebidos para potenciar el marketing del producto.

Control de Formularios: Prevención de envíos de datos incorrectos mediante algoritmos de JavaScript que validan dominios específicos, otorgando feedback visual inmediato en la interfaz sin interrumpir la navegación.
