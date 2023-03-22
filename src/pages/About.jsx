import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <AboutContainer>
      <section className="Hero">
        <header>
          <h1 className="h1">
            Somos <strong>tu comunidad</strong>,<br />
            la Comunidad Swap It.
          </h1>
        </header>
        <div className="hero-images mt-10 sm:mt-12 md:mt-16 sm:flex xl:mt-20">
          <div className="flex space-x-5 sm:flex-col sm:space-x-0 sm:w-2/5">
            <div className="small-image">
              <img
                className="rounded-wp w-full h-full object-cover"
                src="https://res.cloudinary.com/damtbzspb/image/upload/v1679441981/Mery_gp0vyy.png"
                alt=""
              />
            </div>
            <div className="small-image">
              <img
                className="rounded-wp w-full h-full object-cover"
                src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/hero-brand-2-768x643.jpg?fit=768%2C643&amp;ssl=1"
                alt=""
              />
            </div>
          </div>
          <div className="small-image mt-5 sm:mt-0 sm:w-3/5">
            <img
              className="rounded-wp w-full h-full object-cover"
              src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/about-hero-3.jpg?fit=1420%2C1120&amp;ssl=1"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="Historia">
        <header>
          <h5 className="h5 mb-3">Quiénes somos</h5>
          <h2 className="h2">
            {' '}
            Si tu primera opción es de segunda mano, <strong>este es tu lugar</strong>
          </h2>
        </header>
        <div className="body-copy mt-8 xl:mt-11">
          <p>
            Cuando haces algo tan sencillo como intercambiar o donar en Swap It, en
            realidad estás haciendo muchas más cosas. Cosas como darle una nueva vida a
            esa raqueta de pádel que no utilizas y sacarte un dinerillo extra. Cosas como
            ahorrarte un buen pellizco al comprar aquello que quieres y que no imaginabas
            que encontrarías. También estás haciendo cosas increíbles como contribuir a
            que el planeta sea un poquito más sostenible gracias a un consumo más
            responsable. Y muchas, muchas cosas más.
          </p>
          <p>
            Porque cuando utilizas Swap It, pasas a formar parte de una comunidad de
            millones de personas que han descubierto una mejor forma de comprar, de
            compartir y de vivir.{' '}
          </p>
          <p>Así que dinos, ¿cuál es tu primera opción?</p>
        </div>
      </section>
      <section className="about__cifras mt-24 md:mt-28 xl:mt-32 text-center">
        <header>
          <h2 className="h2">
            Donde caben 2,
            <br />
            caben 15.000.000. Y <strong>tú</strong>, también.
          </h2>
        </header>
        <div className="mt-10 sm:mt-12 sm:flex sm:space-x-6 sm:items-end md:mt-16 xl:mt-20 xl:space-x-20">
          <div className="mt-14 sm:mt-0 sm:w-1/3">
            <div className="cifra">+15 millones</div>
            <div className="body-copy">de Swapers</div>
          </div>
          <div className="mt-14 sm:mt-0 sm:w-1/3">
            <div className="cifra">180 millones</div>
            <div className="body-copy">de productos subidos</div>
          </div>
          <div className="mt-14 sm:mt-0 sm:w-1/3">
            <div className="cifra">Muchos miles</div>
            <div className="body-copy">de encuentros</div>
          </div>
        </div>
      </section>
      <section className="about__categories mt-24 md:mt-28 xl:mt-32 text-center">
        <header>
          <h2 className="h2">
            ¡Empieza a encontrar lo que <strong>buscas</strong>!
          </h2>
          <p className="body-copy mt-5 md:mt-6">
            Y únete a una mejor forma
            <br />
            de comprar, de vender y de vivir.
          </p>
        </header>

        <div className="categories-grid mt-12 md:mt-14">
          <div className="box-1">
            <div className="w-1/2 flex flex-col space-y-3 sm:space-y-5">
              <a
                className="cat-1 h-2/3"
                href="https://es.wallapop.com/moda-y-complementos"
              >
                <img
                  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/moda-y-accesorios.jpg?fit=446%2C620&amp;ssl=1"
                  alt=""
                />
                <h4 className="h4 text-green-text">Moda y Accesorios </h4>
              </a>
              <a className="cat-2 h-1/3" href="https://es.wallapop.com/moviles-telefonos">
                <img
                  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/moviles-y-telefonia-300x219.jpg?fit=300%2C219&amp;ssl=1"
                  alt=""
                />
                <h4 className="h4 text-white">Móviles y Telefonía </h4>
              </a>
            </div>

            <div className="w-1/2 flex flex-col space-y-3 sm:space-y-5">
              <a className="cat-3 h-1/3" href="https://es.wallapop.com/ninos-y-bebes">
                <img
                  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/09/sandy-millar-nuS2GDpCDoI-unsplash.jpg?fit=5184%2C3456&amp;ssl=1"
                  alt=""
                />
                <h4 className="h4 text-white">Niños y bebés </h4>
              </a>
              <a
                className="cat-4 h-2/3"
                href="https://es.wallapop.com/coches-segunda-mano"
              >
                <img
                  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/09/Container-6.png?fit=666%2C930&amp;ssl=1"
                  alt=""
                />
                <h4 className="h4 text-white">Coches </h4>
              </a>
            </div>
          </div>

          <div className="box-2">
            <a className="cat-5" href="https://es.wallapop.com/muebles-deco-y-jardin">
              <img
                src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/sofa.jpg?fit=690%2C988&amp;ssl=1"
                alt=""
              />
              <h4 className="h4 text-blue-text">Hogar y Jardín </h4>
            </a>
          </div>

          <div className="box-3">
            <div className="flex space-x-3 sm:space-x-5 sm:w-1/2 lg:w-full">
              <a className="cat-6" href="https://es.wallapop.com/consolas-y-videojuegos">
                <img
                  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/unnamed-file-296x300.jpg?fit=296%2C300&amp;ssl=1"
                  alt=""
                />
                <h4 className="h4 text-white">Consolas </h4>
              </a>
              <a className="cat-7" href="https://es.wallapop.com/deporte-y-ocio">
                <img
                  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/deportes.jpg?fit=324%2C324&amp;ssl=1"
                  alt=""
                />
                <h4 className="h4 text-pink-text">Deportes </h4>
              </a>
            </div>
            <div className="sm:w-1/2 lg:w-full">
              <a className="cat-8" href="https://es.wallapop.com/bicicletas">
                <img
                  src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/bici-300x270.jpg?fit=300%2C270&amp;ssl=1"
                  alt=""
                />
                <h4 className="h4 text-white">Bicicletas </h4>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="about__trabajar mt-20 md:mt-28 xl:mt-40 flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
        <div className="rounded-wp p-10 border border-turquoise-text sm:w-1/2 sm:flex sm:flex-col sm:justify-between lg:w-2/5">
          <h2 className="h2">
            ¿Te gustaría
            <br />
            <strong>trabajar</strong> en
            <br />
            Swap It?
          </h2>

          <a className="button mt-9" href="https://apply.workable.com/wallapop/">
            ¡Hagamos match!{' '}
          </a>
        </div>

        <div className="sm:w-1/2 lg:w-3/5">
          <img
            className="rounded-wp w-full h-full object-cover"
            src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/08/Imagen-de-iOS-17.jpg?fit=4032%2C3024&amp;ssl=1"
            alt=""
          />
        </div>
      </section>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  .Hero {
    /* Estilos para la sección de hero */
    header {
      /* Estilos para el header de la sección de hero */
      .h1 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
        color: #111827;
        strong {
          color: #22d3ee;
        }
      }
    }
    .hero-images {
      margin-top: 2.5rem;
      @media (min-width: 640px) {
        margin-top: 3rem;
      }
      @media (min-width: 768px) {
        margin-top: 4rem;
      }
      @media (min-width: 1280px) {
        margin-top: 5rem;
      }
      .flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media (min-width: 640px) {
          justify-content: flex-start;
        }
        .small-image {
          @media (min-width: 640px) {
            justify-content: flex-start;
          }
          .rounded-wp {
            @media (min-width: 640px) {
              justify-content: flex-start;
            }
          }
        }
      }
    }
  }

  .Historia {
    /* Estilos para la sección de historia */
    header {
      /* Estilos para el header de la sección de historia */
      .h5 {
        /* Estilos para el subtítulo */
      }
      .h2 {
        /* Estilos para el título principal */
        strong {
          /* Estilos para la parte en negrita del título */
        }
      }
    }
    .body-copy {
      /* Estilos para el contenido de la sección */
      p {
        /* Estilos para los párrafos */
      }
    }
  }

  .about__cifras {
    /* Estilos para la sección de cifras */
    header {
      /* Estilos para el header de la sección de cifras */
      .h2 {
        /* Estilos para el título principal */
        strong {
          /* Estilos para la parte en negrita del título */
        }
      }
    }
    .cifra {
      /* Estilos para el número de la cifra */
    }
    .body-copy {
      /* Estilos para la descripción de la cifra */
    }
  }
`;

export default About;
