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
        <article  className="banner__text">
          <h1>La distancia no es el fin.</h1>
          <p>
            GoMunch te permite compartir experiencias con esa persona que amas,
            pero que está lejos.
          </p>
          <div  className="banner__text-input">
            <p>Prueba goMunch gratis.</p>
            <input type="text" className="inputText"></input>
            <button className="button">Probar ahora</button>
          </div>
        </article>
        <article className="banner__imagen">
          <img className="banner__ima"
            src={process.env.PUBLIC_URL + "/assets/img/imagen.png"}
            alt="Relación a distancia">
          </img>
        </article>
      </section>
      <section className="values">
        <h2 className="values__title">Con goMunch puedes</h2>
        <article className="values__box">
          <div className="values__box-one">
            <img></img>
            <h3>Mantener cercanía con las personas a un mar de distancia. </h3>
          </div>
          <div className="values__box-two">
            <img></img>
            <h3>Disfrutar de momentos unicos y especiales con tu persona.</h3>
          </div>
          <div className="values__three">
            <img></img>
            <h3>Una experiencia que se adapta a tus necesidades.</h3>
          </div>
        </article>
      </section>
    <h1 className="importante">Mariana</h1>
    <h2>
      Te quiero
    </h2>
    <h3>
      motones
    </h3>
    </div>
  );
}

export default App;
