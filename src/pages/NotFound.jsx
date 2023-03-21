import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Img
        src="https://res.cloudinary.com/damtbzspb/image/upload/v1679435830/e78c5f4d033f7f8841ab0157ec9f16bc_ngchpf.jpg"
        alt="Error 404 gif"
      />
      <Title>¡Nada por aquí!</Title>
      <Description>
        Uish... Esta página no existe en Swap It, lo que sí que existen son miles de
        oportunidades esperándote..
      </Description>
      <Button onClick={() => (window.location.href = '/')}>Ver productos</Button>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
  color: grey;
`;

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 2rem 0;
`;

const Button = styled.button`
  background-color: #008cba;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #005f6b;
  }
`;

export default NotFound;
