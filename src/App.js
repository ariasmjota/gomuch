import React from "react";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <section>
          <img
            className="nav__logo"
            src={process.env.PUBLIC_URL + "/assets/svg/logo.svg"}
            alt="Logo GoMunch"
          ></img>
        </section>
        <section className="nav__cupon">
          <a>Obtener cupón</a>
        </section>
      </nav>
      <section className="banner">
        <article className="banner__text">
          <h1>La distancia no es el fin.</h1>
          <p>
            GoMunch te permite compartir experiencias con esa persona que amas,
            pero que está lejos.
          </p>
          <div className="banner__text-input">
            <p>Prueba goMunch gratis.</p>
            <input type="text" className="inputText"></input>
            <button className="button">Probar ahora</button>
          </div>
        </article>
        <article className="banner__imagen">
          <img
            className="banner__ima"
            src={process.env.PUBLIC_URL + "/assets/img/imagen.png"}
            alt="Relación a distancia"
          ></img>
        </article>
      </section>
      <section className="values">
        <h2 className="values__title">Con goMunch puedes</h2>
        <section className="values__box">
          <div className="values__box-one">
            <img
              src={process.env.PUBLIC_URL + "/assets/svg/amor.svg"}
              alt="Relación a distancia"
            ></img>
            <h3>Mantener cercanía con las personas a un mar de distancia. </h3>
          </div>
          <div className="values__box-two">
            <img
              src={process.env.PUBLIC_URL + "/assets/svg/relacion.svg"}
              alt="Relación a distancia"
            ></img>
            <h3>Disfrutar de momentos unicos y especiales con tu persona.</h3>
          </div>
          <div className="values__box-three">
            <img
              src={process.env.PUBLIC_URL + "/assets/svg/virtual.svg"}
              alt="Relación a distancia"
            ></img>
            <h3>Una experiencia que se adapta a tus necesidades.</h3>
          </div>
        </section>
        <section className="values__what">
          <article className="values__what-left">
            <h2 className="values__title">¿Qué es goMunch?</h2>
            <p>
              goMunch es una aplicación preocupada por la emotividad al momento
              de compartir una comida entre personas separadas geográficamente.
            </p>
            <p>
              Permite visualizar y mantener recuerdos de los diferentes momentos
              que has compartido con tus personas cercanas.
            </p>
          </article>
          <article className="values__what-right">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/mock.png"}
              alt="Relación a distancia"
            ></img>
          </article>
          <div id="background"></div>
        </section>
      </section>
      <section className="gomunch">

      </section>
      <h1 className="importante">Mariana</h1>
      <h2>Te quiero</h2>
      <h3>motones</h3>
    </div>
  );
}

export default App;
