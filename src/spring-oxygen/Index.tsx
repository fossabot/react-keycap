import React from 'react';
import './Index.sass';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Document } from './document/Document';

function Home() {
	return (
		<div>
			<header className={'header-div'}>
				<Header />
			</header>

			<main className={'main-div'}>
				<Switch>
					<Route path={'/spring-oxygen/document'} exact>
						<Document />
					</Route>
					<Route path={'/spring-oxygen'} exact>
						<Main />
					</Route>
				</Switch>
			</main>

			<footer className={'footer-div'}>
				<Footer />
			</footer>
		</div>
	);
}

export function Index() {
	return (
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	);
}
