import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function About() {
  return (
    <AboutContainer>
      <div className="Container">
        <section className="Hero">
          <header>
            <h1 className="h1">
              Somos <strong>tu comunidad</strong>,<br />
              la Comunidad Swap It.
            </h1>
          </header>
          <div className="hero-images">
            <div className="avatar">
              <img
                src="https://res.cloudinary.com/damtbzspb/image/upload/v1679441981/Mery_gp0vyy.png"
                alt=""
              />
            </div>
            <div className="auricular">
              <img
                src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/hero-brand-2-768x643.jpg?fit=768%2C643&amp;ssl=1"
                alt=""
              />
            </div>
            <div className="boy">
              <img
                src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/about-hero-3.jpg?fit=1420%2C1120&amp;ssl=1"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="Historia">
          <header>
            <h5 className="Quienes">Quiénes somos</h5>
            <h2 className="h2">
              {' '}
              Si tu primera opción es de segunda mano, <strong>este es tu lugar</strong>
            </h2>
          </header>
          <div className="text1">
            <p>
              Cuando haces algo tan sencillo como intercambiar o donar en Swap It, en
              realidad estás haciendo muchas más cosas. Cosas como darle una nueva vida a
              esa raqueta de pádel que no utilizas y sacarte un dinerillo extra. Cosas
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
        </section>
        <section className="about__cifras">
          <header>
            <h2 className="h2">
              Donde caben 2,
              <br />
              caben 15.000.000. Y <strong>tú</strong>, también.
            </h2>
          </header>
          <div className="cifra">+15 millones</div>
          <div className="body-copy">de Swapers</div>
          <div className="cifra">180 millones</div>
          <div className="body-copy">de productos subidos</div>
          <div className="cifra">Muchos miles</div>
          <div className="body-copy">de encuentros</div>
        </section>
        <section className="about__categories">
          <header>
            <h2 className="h2">
              ¡Empieza a encontrar lo que <strong>buscas</strong>!
            </h2>
            <p className="body-copy">
              Y únete a una mejor forma
              <br />
              de comprar, de vender y de vivir.
            </p>
          </header>

          <div className="categories">
            <div className="box-1">
              <a className="Movies, Books & Music">
                <Link to="/Mi enlace">Mi enlace</Link>
                <img
                  src="https://res.cloudinary.com/damtbzspb/image/upload/v1679660529/books-movies-music_t60r4r.jpg"
                  alt=""
                />
                <h4 className="h4">Movies, Books & Music</h4>
              </a>

              <a className="Videogames">
                <Link to="/Mi enlace">Mi enlace</Link>
                <img
                  src="https://res.cloudinary.com/damtbzspb/image/upload/v1679660642/OIP_uyj8x2.jpg"
                  alt=""
                />
                <h4 className="h4">Videogames</h4>
              </a>

              <a className="Appliances">
                <Link to="/Mi enlace">Mi enlace</Link>
                <img
                  src="https://res.cloudinary.com/damtbzspb/image/upload/v1679661390/1486144529home-appliances-png-simple_ke3mwu.png"
                  alt=""
                />
                <h4 className="h4">Appliances</h4>
              </a>

              <a className="Electronic">
                <Link to="/Mi enlace">Mi enlace</Link>
                <img
                  src="https://res.cloudinary.com/damtbzspb/image/upload/v1679661496/OIP_sfrfyn.jpg"
                  alt=""
                />
                <h4 className="h4">Electronic</h4>
              </a>

              <a className="Sports&Leissure">
                <Link to="/Mi enlace">Mi enlace</Link>
                <img
                  src="https://res.cloudinary.com/damtbzspb/image/upload/v1679661542/983-9832325_sport-clipart-clear-background-school-sports-logo-png_cody3l.jpg"
                  alt=""
                />
                <h4 className="h4">Sports&Leissure</h4>
              </a>

              <a className="Home">
                <Link to="/Mi enlace">Mi enlace</Link>
                <img
                  src="https://res.cloudinary.com/damtbzspb/image/upload/v1679661607/download_goqpu6.jpg"
                  alt=""
                />
                <h4 className="h4">Home</h4>
              </a>

              <a className="Other">
                <Link to="/Mi enlace">Mi enlace</Link>
                <img
                  src="https://res.cloudinary.com/damtbzspb/image/upload/v1679661650/OIP_az8a8t.jpg"
                  alt=""
                />
                <h4 className="h4">Other</h4>
              </a>
            </div>
          </div>
        </section>

        <section className="about__trabajar">
          <h2>
            ¿Te gustaría
            <br />
            <strong>trabajar</strong> en
            <br />
            Swap It?
          </h2>
          <Link to="/Trabaja con nosotros"></Link>
          ¡Hagamos match!{' '}
          <div className="Finish">
            <img
              src="https://res.cloudinary.com/damtbzspb/image/upload/v1679661734/OIP_kjhtmw.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  .Container {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;

    .h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 50px;
      text-color:#009975;

      strong {
        font-weight: 900;
      }
    }

    .hero-images {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-bottom: 50px;

      .avatar img,
      .auricular img,
      .boy img {
        width: 400px;
      }
    

  .Historia {
    margin-top: 100px;
    margin-bottom: 100px;

    .Quienes {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.2;
      color: #181818;;
      margin-bottom: 20px;
      text-align: center;
      text-transform: uppercase;
    }

    .h2 {
      font-size: 48px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 50px;
      text-color: #009975;

      strong {
        font-weight: 900;
      }
    }

    .text1 {
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 50px;
      text-color: #009975;

      p {
        margin-bottom: 20px;
        text-color: #009975;
      }
  

  .about__cifras {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    .h2 {
      font-size: 48px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 50px;
      text-color: #009975;
      strong {
        font-weight: 900;
      }
    }

    .cifra {
      font-size: 72px;
      font-weight: 900;
      margin-bottom: 20px;
    }

    .body-copy {
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 50px;
      text-color: #009975;
    }
  

  .Categories {
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  & .box-1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: left;
    gap: 30px;

    & a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: black;

      & img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }

      & .h4 {
        margin-top: 10px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        text-color: #009975;
      }
    }
  
  
  .about__trabajar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  
    & h2 {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      text-color: #009975;
    }
  
    & strong {
      color: #FFB900;
    }
  
    & a {
      font-size: 20px;
      font-weight: bold;
      color: #FFB900;
      text-decoration: none;
    }
  
    & .Finish {
      margin-top: 30px;
  
      & img {
        width: 600px;
        height: 600px;
        object-fit: cover;
      }
  }
}

`;

export default About;
