import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='mainFooter'>
      <hr />
      <p className='letras'>
        &copy; {new Date().getFullYear()} Game over | Todos los derechos reservados | privacidad
      </p>
    </div>
  );
};
