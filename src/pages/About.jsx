import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & img {
    height: 400px;
    width: 400px;
    display: flex;
    align-items: center;
    gap: 5rem;
    padding: 5rem 0;
  }

  & .hero-images {
    display: flex;
    justify-content: space-between;
    margin: 50px 50px 1px;
  }

  & .Container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & h1 {
    color: #07689f;
    font-family: Grenette;
    font-size: 46px;
    font-weight: 300;
    letter-spacing: -1.9px;
    line-height: 42px;
    margin: 100px 0px 60px;
  }

  & .Historia {
    color: #07689f;
    font-family: Wallie;
    font-size: 18px;
    letter-spacing: -0.54px;
    line-height: 28px;
    margin: 200px 0px 0px;
    text-align: center;
  }

  & .PrimeraOpcion {
    margin: 50px 50px 60px;
    font-size: 40px;
  }

  & .h5 {
    color: #07689f;
    font-family: Grenette;
    font-size: 20px;
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 42px;
    margin: 10px;
  }

  & .block {
    display: flex;
    font-size: 18px;
    letter-spacing: -0.54px;
    line-height: 28px;
    margin: 64px 0px 0px;
    text-align: center;
  }

  & .Comprar {
    color: #07689f;
    font-family: Grenette;
    font-size: 50px;
    font-weight: 300;
    letter-spacing: -2px;
    line-height: 44px;
    text-align: center;
    margin: 200px 0px 0px;
  }

  & .Promovemos {
    color: #07689f;
    font-family: Grenette;
    font-size: 26px;
    font-weight: 300;
    letter-spacing: -1.3px;
    line-height: 31px;
    margin: 0px 15.9375px;
    text-align: center;
  }

  & .Fomentamos {
    color: #07689f;
    font-family: Grenette;
    font-size: 26px;
    font-weight: 300;
    letter-spacing: -1.3px;
    line-height: 31px;
    margin: 0px 15.9375px;
    text-align: center;
  }

  & .Amamos {
    color: #07689f;
    font-family: Grenette;
    font-size: 26px;
    font-weight: 300;
    letter-spacing: -1.3px;
    line-height: 31px;
    margin: 0px 15.9375px;
    text-align: center;
  }

  & .PromovemosText {
    color: #07689f;
    font-size: 18px;
    letter-spacing: -0.54px;
    line-height: 28px;
    text-align: center;
  }

  & .FomentamosText {
    color: #07689f;
    font-size: 18px;
    letter-spacing: -0.54px;
    line-height: 28px;
    text-align: center;
  }

  & .AmamosText {
    color: #07689f;
    font-size: 18px;
    letter-spacing: -0.54px;
    line-height: 28px;
    text-align: center;
  }

  & .DondeCaben2 {
    color: #07689f;
    font-family: Grenette;
    font-size: 40px;
    font-weight: 00;
    letter-spacing: -1.3px;
    margin: 200px 10px 10px;
    text-align: center;
  }

  & .block2 {
    display: flex;
    font-size: 18px;
    letter-spacing: -0.54px;
    line-height: 28px;
    margin: 64px 0px 60px;
    text-align: center;
  }

  & .cifra {
    color: #07689f;
    font-size: 30px;
    letter-spacing: -0.54px;
    line-height: 28px;
    text-align: center;
  }

  & .body-copy {
    color: #07689f;
    font-size: 18px;
    letter-spacing: -0.54px;
    line-height: 28px;
    text-align: center;
  }

  & .15millones {
    margin: 0px 150.9375px;
  }

  & .180millones {
    margin: 100px 150.9375px 100px;
  }

  & .MuchosMiles {
    margin: 0px 150.9375px;
  }

  & .cifra2 {
    color: #07689f;
    font-size: 40px;
    letter-spacing: -0.54px;
    line-height: 40px;
    text-align: center;
    margin: 200px 10px 10px;
  }

  & .body-copy2 {
    color: #07689f;
    font-size: 20px;
    letter-spacing: -0.54px;
    line-height: 28px;
    text-align: center;
    margin: 20px 0px 50px;
  }

  & .box-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
  }

  .card {
    width: 300px;
    height: 400px;
    background-color: #07689f;
    border-radius: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
    position: relative;
    viewox: 0 0 24 24;
  }
  
  .card img {
    width: 90%;
    height: 90%;
    border-radius: 20px;
  }
  
  .card h3 {
    margin: 0;
    padding: 0px;
    text-align: center;
    text-shadow: 10px 10px 10px rgba(10, 10, 10, 10.3);
  }
  


  
 }
`;
function About() {
  return (

            </div>
          </section>
          <section className="Historia">
            <header>
              <h5 className="Quienes">Quiénes somos</h5>
              <h2 className="PrimeraOpcion">
                {' '}
                Si tu primera opción es de segunda mano, <strong>este es tu lugar</strong>
              </h2>
            </header>
            <div className="text1">
              <p>
                Cuando haces algo tan sencillo como intercambiar o donar en Swap It, en
                realidad estás haciendo muchas más cosas. Cosas como darle una nueva vida
                a esa raqueta de pádel que no utilizas y sacarte un dinerillo extra. Cosas
                como ahorrarte un buen pellizco al comprar aquello que quieres y que no
                imaginabas que encontrarías. También estás haciendo cosas increíbles como
                contribuir a que el planeta sea un poquito más sostenible gracias a un
                consumo más responsable. Y muchas, muchas cosas más.
              </p>
              <p>
                Porque cuando utilizas Swap It, pasas a formar parte de una comunidad de
                millones de personas que han descubierto una mejor forma de comprar, de
                compartir y de vivir.{' '}
              </p>
              <p>Así que dinos, ¿cuál es tu primera opción?</p>
            </div>

  );
}

export default About;
