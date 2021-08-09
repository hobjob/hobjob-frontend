import dotenv from 'dotenv';
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components/';

import { Home, Cart, Shop, Magazine, MagazinePostPage, MasterCard, MastersAbout, Master, Pro, About, Err404, Login, Register, RepeatEmail, PasswordRecoveryEmail, PasswordRecoveryNewPassword, Confirmed, Training, PassingCourse, Cabinet, Referrals, Payment, PaymentConfirmation } from './pages/';

dotenv.config()

const App = () => {
	return (
		<div className="wrapper">
			{window.location.pathname.indexOf("/payment") !== -1 || window.location.pathname === "/go/login" || window.location.pathname === "/go/register" || window.location.pathname === "/go/password-recovery" || window.location.pathname === "/go/repeat-email" || window.location.pathname.indexOf("/go/password-recovery") !== -1 || window.location.pathname.indexOf("/go/confirmed") !== -1 ? null : <Header />}

			<Suspense fallback={() => <></>}>
				<Switch>
					<Route path="/" render={(props) => <Home {...props} />} exact />

					<Route path="/cart" render={() => <Cart />} exact />
					<Route path="/shop" render={(props) => <Shop {...props} />} exact />

					<Route path="/magazine" render={(props) => <Magazine {...props} />} exact />
					<Route path="/magazine/post/:id" render={(props) => <MagazinePostPage {...props} />} exact />

					<Route path="/master/:id" render={(props) => <MasterCard {...props} />} exact />
					<Route path="/masters-about" render={() => <MastersAbout />} exact />
					<Route path="/pro" render={() => <Pro />} exact />
					<Route path="/about" render={() => <About />} exact />

					<Route path="/payment/:id" render={(props) => <Payment {...props} />} exact />
					<Route path="/payment/confirmation/:number" render={(props) => <PaymentConfirmation {...props} />} exact />

					{/* GO */}
					<Route path="/go/login" render={() => <Login />} exact />
					<Route path="/go/register" render={(props) => <Register {...props} />} exact />

					<Route path="/go/password-recovery" render={() => <PasswordRecoveryEmail />} exact />
					<Route path="/go/password-recovery/:hash" render={(props) => <PasswordRecoveryNewPassword {...props} />} exact />

					<Route path="/go/repeat-email" render={() => <RepeatEmail />} exact />

					<Route path="/go/confirmed/:hash" render={(props) => <Confirmed {...props} />} exact />

					<Route path="/go/training" render={() => <Training />} exact />
					<Route path="/go/passing/:courseId/:lessonNum" render={(props) => <PassingCourse {...props} />} exact />
					<Route path="/go/cabinet" render={() => <Cabinet />} exact />
					<Route path="/go/referrals" render={() => <Referrals />} exact />
					<Route path="/go/master" render={() => <Master />} exact />

					<Route render={() => <Err404 />} exact />
				</Switch>
			</Suspense>

			{window.location.pathname.indexOf("/payment") !== -1 || window.location.pathname === "/go/login" || window.location.pathname === "/go/register" || window.location.pathname === "/go/password-recovery" || window.location.pathname === "/go/repeat-email" || window.location.pathname.indexOf("/go/password-recovery") !== -1 || window.location.pathname.indexOf("/go/confirmed") !== -1 ? null : <Footer />}
		</div>
	)
}

export default App

