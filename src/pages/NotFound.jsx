import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <img
        src="https://res.cloudinary.com/damtbzspb/image/upload/v1679435830/e78c5f4d033f7f8841ab0157ec9f16bc_ngchpf.jpg"
        alt="Error 404 gif"
      />
      <h1>¡Nada por aquí!</h1>
      <p>
        Uish... Esta página no existe en Wallapop, lo que sí que existen son miles de
        oportunidades esperándote..
      </p>
      <button onClick={() => (window.location.href = '/')}>Ver productos</button>
    </div>
  );
};

export default NotFound;
