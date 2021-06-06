import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components/';

import { Home, Cart, Shop, Magazine, MagazinePostPage, Master, Pro, Err404 } from './pages/';

const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={() => <></>}>
				<Switch>
					<Route path="/" render={() => <Home />} exact />

					<Route path="/cart" render={() => <Cart />} exact />
					<Route path="/shop" render={(props) => <Shop {...props} />} exact />

					<Route path="/magazine" render={() => <Magazine />} exact />
					<Route path="/magazine/post/:id" render={(props) => <MagazinePostPage {...props} />} exact />

					<Route path="/master" render={() => <Master />} exact />
					<Route path="/pro" render={() => <Pro />} exact />

					<Route render={() => <Err404 />} exact />
				</Switch>
			</Suspense>
			<Footer />
		</>
	)
}

export default App

