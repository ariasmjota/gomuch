import React, { useState } from 'react';
import firebase from './config/firebase';

import ReactGA from 'react-ga';

function App() {
	const base = firebase.firestore().collection('correos');
	const [useCorreo, setCorreo] = useState('');
	const date = new Date();

	ReactGA.initialize('G-MM3VJ7JEXH');
	ReactGA.pageview('/');
	console.log('esto esta en la web');
	function click(e) {
		setCorreo('');
		e.preventDefault();
		let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		let minute =
			date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

		let now = date.toDateString() + hour + ':' + minute;

		if (useCorreo !== '') {
			base
				.doc(useCorreo)
				.set({ correo: useCorreo, fecha: now }, { merge: true })
				.catch((err) => console.log(err.message));
			alert('Muchas gracias por inscribirte');
		} else {
			alert('Por favor ingrese un correo');
		}
	}

	return (
		<div className='App'>
			<nav className='nav'>
				<section>
					<img
						className='nav__logo'
						src={process.env.PUBLIC_URL + '/assets/svg/logo.svg'}
						alt='Logo GoMunch'
					></img>
				</section>
				<section className='nav__cupon'>
					<p>Obtener cupón</p>
				</section>
			</nav>
			<section className='banner'>
				<article className='banner__text'>
					<h1>La distancia no es el fin.</h1>
					<p>
						GoMunch te permite compartir experiencias con esa persona que amas,
						pero que está lejos.
					</p>
					<div className='banner__text-input'>
						<p>Prueba goMunch gratis.</p>
						<form autoComplete='true'>
							<input
								className='inputText'
								placeholder='Correo electrónico'
								onChange={(e) => setCorreo(e.target.value)}
								value={useCorreo}
								required
								type='email'
							/>
							<button type='submit' className='button' onClick={click}>
								Probar ahora
							</button>
							<button type='submit' className='button__hidden' onClick={click}>
								<i className='fas fa-paper-plane'></i>
							</button>
						</form>
					</div>
				</article>
				<article className='banner__imagen'>
					<img
						className='banner__ima'
						src={process.env.PUBLIC_URL + '/assets/img/imagen.png'}
						alt='Relación a distancia'
					></img>
				</article>
			</section>
			<section className='values'>
				<h2 className='values__title'>Con goMunch puedes</h2>
				<section className='values__box'>
					<div className='values__box-one'>
						<img
							src={process.env.PUBLIC_URL + '/assets/svg/amor.svg'}
							alt='Relación a distancia'
						></img>
						<h3>Mantener cercanía con las personas a un mar de distancia. </h3>
					</div>
					<div className='values__box-two'>
						<img
							src={process.env.PUBLIC_URL + '/assets/svg/relacion.svg'}
							alt='Relación a distancia'
						></img>
						<h3>Disfrutar de momentos unicos y especiales con tu persona.</h3>
					</div>
					<div className='values__box-three'>
						<img
							src={process.env.PUBLIC_URL + '/assets/svg/virtual.svg'}
							alt='Relación a distancia'
						></img>
						<h3>Una experiencia que se adapta a tus necesidades.</h3>
					</div>
				</section>
				<section className='values__what'>
					<article className='values__what-left'>
						<h2 className='values__title'>¿Qué es goMunch?</h2>
						<p>
							goMunch es una aplicación preocupada por la emotividad al momento
							de compartir una comida entre personas separadas geográficamente.
						</p>
						<p>
							Permite visualizar y mantener recuerdos de los diferentes momentos
							que has compartido con tus personas cercanas.
						</p>
					</article>
					<article className='values__what-right'>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/mock.png'}
							alt='Relación a distancia'
						></img>
					</article>
					<div id='background'></div>
				</section>
			</section>
			<section className='gomunch'>
				<article className='gomunch__top'>
					<div className='gomunch__top-left'>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/mock2.png'}
							alt='Relación a distancia'
						></img>
					</div>
					<div className='gomunch__top-right'>
						<h2 className='values__title'>
							Restaurantes a un tap de distancia
						</h2>
						<p>
							Encuentra restaurantes en la ciudad que vive tu persona especial
							de una manera sencilla y conﬁable.
						</p>
					</div>
				</article>
				<article className='gomunch__bottom'>
					<div className='gomunch__bottom-left'>
						<h2 className='values__title'>
							Interactúa con tu persona especial.
						</h2>
						<p>
							{' '}
							Recibe conﬁrmación visual del momento especial en que tu persona
							cercana recibe lo que le enviaste.
						</p>
					</div>
					<div className='gomunch__bottom-right'>
						<img
							src={process.env.PUBLIC_URL + '/assets/img/mock3.png'}
							alt='Relación a distancia'
						></img>
					</div>
				</article>
			</section>
			<section className='newsletter'>
				<article className='newsletter__box'>
					<h2 className='values__title'>
						Incríbete ahora y recibe tu primer cupón
					</h2>
					<p>
						Manten cercanía en tu relación a distancia, ¡inicia ahora y obten tu
						cupón de descuento!
					</p>
					<div className='newsletter__text-input'>
						<p>Prueba goMunch gratis.</p>
						<form autoComplete='true'>
							<input
								className='inputText'
								placeholder='Correo electrónico'
								onChange={(e) => setCorreo(e.target.value)}
								value={useCorreo}
								required
								type='email'
							/>
							<button type='submit' className='button' onClick={click}>
								Probar ahora
							</button>
							<button type='submit' className='button__hidden' onClick={click}>
								<i className='fas fa-paper-plane'></i>
							</button>
						</form>
					</div>
				</article>
			</section>
			<div className='marca'>
				<p>Made by</p>
				<img
					src={process.env.PUBLIC_URL + '/assets/svg/Marcasola.svg'}
					alt='Relación a distancia'
				></img>
			</div>
		</div>
	);
}

export default App;
