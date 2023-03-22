import React from 'react';

function About() {
  return (
    <div className="container">
      <section className="about__hero">
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
                src="https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/about-hero-1-768x449.jpg?fit=768%2C449&amp;ssl=1"
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
      <section className="about__historia mt-24 md:mt-28 xl:mt-32">
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
    </div>
  );
}

export default About;
