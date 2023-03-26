import { useContext } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & img {
    height: 400px;
    width: 300px;
    display: flex;
    flex-wrap: wrap
    align-items: center;
    gap: 5rem;
    padding: 2rem 0;
  }

  & .hero-images {
    display: flex;
    justify-content: space-between;
    margin: 20px 50px 1px;
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
    border-radius: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 5px 10px rgba(7, 104, 159, 0.3);
    position: relative;
    viewBox: 0 0 24 24;
  }

  .card:hover {
    transform: scale(0.95);
    transition: transform 0.5s ease-in-out;
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

  .Link {
    font-size: 24px; 
    color: #07689f; 
    text-decoration: none; 
    transition: all 0.3s ease; 
  }
  
  .Link:hover {
    color: #07689f; 
    transform: scale(1.1);
  }

  .about__trabajar {
    border: 2px solid #07689f;
    box-shadow: #07689f;
    padding: 20px;
    margin: 230px;
    position: relative;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
  }
  
  .about__trabajar:hover {
    border-color: #ff8c00;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
  
  .about__trabajar h2 {
    color: #07689f;
  }
  
  .about__trabajar .Finish img {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;
const CategoriesNavBarStyled = styled.div``;

function About() {
  return (
    <body>
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
          </section>

          <section className="about__principios">
            <header>
              <h2 className="Comprar">
                Comprar y vender es solo el <strong>principio</strong>.
              </h2>
            </header>
            <body className="block">
              <div className="Promovemos">
                <h4 className="Title">
                  🌱 <strong>Promovemos un consumo sostenible</strong>
                </h4>
                <div className="PromovemosText">
                  Hacemos que la compraventa de productos de segunda mano sea una
                  experiencia mucho más sencilla, con lo que directamente ayudamos a
                  potenciar un modelo de consumo sostenible.
                </div>
              </div>
              <div className="Fomentamos">
                <h4 className="Title">
                  💸 <strong>Fomentamos una economía más dinámica y eficiente</strong>
                </h4>
                <div className="FomentamosText">
                  Comprando lo que necesitas y vendiendo lo que no, estás optimizando tus
                  recursos económicos, a la vez que ayudas a otras personas a optimizar
                  los suyos. Y entre todos, colaboramos para crear una economía mejor.
                </div>
              </div>
              <div className="Amamos">
                <h4 className="Title">
                  🌎 <strong>Amamos la pluralidad</strong>
                </h4>
                <div className="AmamosText">
                  En Wallapop, mostramos, ordenamos y tratamos todos los productos de
                  manera igualitaria e imparcial. Y con ello, buscamos reconocer y
                  enriquecer la diversidad de gustos de nuestra comunidad.
                </div>
              </div>
            </body>
          </section>

          <section className="about__cifras">
            <header>
              <h2 className="DondeCaben2">
                Donde caben 2,
                <br />
                caben 15.000.000. Y <strong>tú</strong>, también.
              </h2>
            </header>
            <body className="block2">
              <div className="15millones">
                <div className="cifra">+15 millones</div>
                <div className="body-copy">de Swapers</div>
              </div>
              <div className="180millones">
                <div className="cifra">180 millones</div>
                <div className="body-copy">de productos subidos</div>
              </div>
              <div className="MuchosMiles">
                <div className="cifra">Muchos miles</div>
                <div className="body-copy">de encuentros</div>
              </div>
            </body>
          </section>

          <section>
            <div className="CifrasImage">
              <div className="sm:mt-24 xl:mt-14">
                <img
                  className="rounded-wp"
                  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/about-1-768x767.jpg?fit=768%2C767&amp;ssl=1"
                  alt=""
                />
                <img
                  className="rounded-wp2"
                  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/about-2.jpg?fit=688%2C920&amp;ssl=1"
                  alt=""
                />
              </div>
            </div>
          </section>
          {/*  <section className="about__categories">
            <header>
              <h2 className="cifra2">
                ¡Empieza a encontrar lo que <strong>buscas</strong>!
              </h2>
              <p className="body-copy2">
                Y únete a una mejor forma
                <br />
                de comprar, de vender y de vivir.
              </p>
            </header>

            <div className="categories">
              <div className="box-1">
                <a className="card">
                  <img
                    src="https://res.cloudinary.com/damtbzspb/image/upload/v1679687996/books-movies-music_t60r4r-removebg-preview_stlfyp.png"
                    alt=""
                  />
                  <h4 className="Link">
                    <Link to="/Mi enlace">Movies, Books & Music</Link>
                  </h4>
                </a>

                <a className="card">
                  <img
                    src="https://res.cloudinary.com/damtbzspb/image/upload/v1679689998/OIP_uyj8x2-removebg-preview_kmfef3.png"
                    alt=""
                  />
                  <h4 className="Link">
                    <Link to="/Mi enlace">Videogames</Link>
                  </h4>
                </a>

                <a className="card">
                  <img
                    src="https://res.cloudinary.com/damtbzspb/image/upload/v1679661390/1486144529home-appliances-png-simple_ke3mwu.png"
                    alt=""
                  />
                  <h4 className="Link">
                    <Link to="/Mi enlace">Appliances</Link>
                  </h4>
                </a>

                <a className="card">
                  <img
                    src="https://res.cloudinary.com/damtbzspb/image/upload/v1679690069/OIP_sfrfyn-removebg-preview_dmr7ko.png"
                    alt=""
                  />
                  <h4 className="Link">
                    <Link to="/Mi enlace">Electronic</Link>
                  </h4>
                </a>

                <a className="card">
                  <img
                    src="https://res.cloudinary.com/damtbzspb/image/upload/v1679690043/983-9832325_sport-clipart-clear-background-school-sports-logo-png_cody3l-removebg-preview_iqfsy1.png"
                    alt=""
                  />
                  <h4 className="Link">
                    <Link to="/Mi enlace">Sports&Leissure</Link>
                  </h4>
                </a>

                <a className="card">
                  <img
                    src="https://res.cloudinary.com/damtbzspb/image/upload/v1679689967/download_goqpu6-removebg-preview_xuviiu.png"
                    alt=""
                  />
                  <h4 className="Link">
                    <Link to="/Mi enlace">Home</Link>
                  </h4>
                </a>

                <a className="card">
                  <img
                    src="https://res.cloudinary.com/damtbzspb/image/upload/v1679688821/OIP_az8a8t-removebg-preview_kqcipj.png"
                    alt=""
                  />
                  <h4 className="Link">
                    <Link to="/Mi enlace">Other</Link>
                  </h4>
                </a>
              </div>
            </div>
          </section> */}
        </div>
      </AboutContainer>
    </body>
  );
}

const CategoriesNav = () => {
  const { setCategory } = useContext(UserContext);
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    setCategory(category);
    navigate('/categories/category');
  };
  return (
    <CategoriesNavBarStyled>
      <button
        className="categoriebtns"
        onClick={() => handleCategoryClick('movies, books & music')}
      >
        <img
          src="https://res.cloudinary.com/damtbzspb/image/upload/v1679689998/OIP_uyj8x2-removebg-preview_kmfef3.png"
          alt=""
        />
        <p>Movies, Books & Music</p>
      </button>
      <button
        type="button"
        className="categoriebtns"
        onClick={() => handleCategoryClick('videogames')}
      >
        <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679413101/SWAPit/9022479_bztwie.png"
          alt="icon"
        />
        <p>Videogames</p>
      </button>
      <button
        type="button"
        className="categoriebtns"
        onClick={() => handleCategoryClick('appliances')}
      >
        <img
          src="https://res.cloudinary.com/damtbzspb/image/upload/v1679661390/1486144529home-appliances-png-simple_ke3mwu.png"
          alt=""
        />
        <p>Appliances</p>
      </button>
      <button className="categoriebtns" onClick={() => handleCategoryClick('electronic')}>
        <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679411365/SWAPit/408533_wvtjvm.png"
          alt="icon"
        />
        <p>Electronic</p>
      </button>
      <button
        className="categoriebtns"
        onClick={() => handleCategoryClick('sports & leisure')}
      >
        <img
          src="https://res.cloudinary.com/damtbzspb/image/upload/v1679690043/983-9832325_sport-clipart-clear-background-school-sports-logo-png_cody3l-removebg-preview_iqfsy1.png"
          alt=""
        />
        <p>Sports & Leisure</p>
      </button>
      <button className="categoriebtns" onClick={() => handleCategoryClick('home')}>
        <img
          src="https://res.cloudinary.com/damtbzspb/image/upload/v1679689967/download_goqpu6-removebg-preview_xuviiu.png"
          alt=""
        />
        <p>Home</p>
      </button>
      <button className="categoriebtns" onClick={() => handleCategoryClick('other')}>
        <img
          src="https://res.cloudinary.com/damtbzspb/image/upload/v1679688821/OIP_az8a8t-removebg-preview_kqcipj.png"
          alt=""
        />
        <p>Other</p>
      </button>
    </CategoriesNavBarStyled>
  );
};
<AboutContainer>
  <section className="about__trabajar">
    <h2 className="trabajar">
      ¿Te gustaría
      <br />
      <strong>trabajar</strong> en
      <br />
      Swap It?
      <br />
      <Link to="/Trabaja con nosotros">¡Hagamos match! </Link>
    </h2>
    <div className="Finish">
      <img
        src="https://res.cloudinary.com/damtbzspb/image/upload/v1679661734/OIP_kjhtmw.jpg"
        alt=""
      />
    </div>
  </section>
</AboutContainer>;

export default About;
CategoriesNav;
