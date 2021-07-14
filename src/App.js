import dotenv from 'dotenv';
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components/';

import { Home, Cart, Shop, Magazine, MagazinePostPage, Master, MastersAbout, Pro, About, Err404, Login, Register, Cabinet } from './pages/';

dotenv.config()

const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={() => <></>}>
				<Switch>
					<Route path="/" render={() => <Home />} exact />

					<Route path="/cart" render={() => <Cart />} exact />
					<Route path="/shop" render={(props) => <Shop {...props} />} exact />

					<Route path="/magazine" render={(props) => <Magazine {...props} />} exact />
					<Route path="/magazine/post/:id" render={(props) => <MagazinePostPage {...props} />} exact />

					<Route path="/master/:id" render={(props) => <Master {...props} />} exact />
					<Route path="/masters-about" render={() => <MastersAbout />} exact />
					<Route path="/pro" render={() => <Pro />} exact />
					<Route path="/about" render={() => <About />} exact />

					<Route path="/login" render={() => <Login />} exact />
					<Route path="/register" render={() => <Register />} exact />

					<Route path="/cabinet" render={() => <Cabinet />} exact />

					<Route render={() => <Err404 />} exact />
				</Switch>
			</Suspense>
			<Footer />
		</>
	)
}

export default App

