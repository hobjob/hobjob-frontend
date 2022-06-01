import dotenv from 'dotenv';
import React from 'react'
import { Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components/';

import { Home, Shop, CoursePage, Magazine, MagazinePostPage, MasterCard, Login, PasswordRecoveryEmail, PasswordRecoveryNewPassword, Training, PassingCourse, Cabinet, Referrals, Register, PaymentSubscribe, PaymentStatus, PaymentError, Policy, PublicOffer, ReferralsPolicy, Regulations, EngineeringWorks, CabinetSubscribeDisable } from './pages/';

dotenv.config()

const App = () => {
	return (
		<>
			{false ? <EngineeringWorks /> : <div className="wrapper">
				{window.location.pathname.indexOf("/payment") !== -1 || window.location.pathname.indexOf("/login") !== -1 || window.location.pathname.indexOf("/register") !== -1 || window.location.pathname === "/go/password-recovery" || window.location.pathname.indexOf("/go/password-recovery") !== -1 ? null : <Header />}

				<React.Suspense fallback={() => <></>}>
					<Switch>
						<Route path="/" render={(props) => <Home {...props} />} exact />

						<Route path="/course" render={(props) => <Shop search={props.history.location.search} />} exact />

						<Route path="/course/:url" render={(props) => <CoursePage {...props} />} exact />

						<Route path="/magazine" render={(props) => <Magazine {...props} />} exact />
						<Route path="/magazine/post/:id" render={(props) => <MagazinePostPage {...props} />} exact />

						<Route path="/master/:id" render={(props) => <MasterCard {...props} />} exact />

						{/* Payment */}
						<Route path="/payment/subscribe/:number" render={(props) => <PaymentSubscribe {...props} />} exact />

						<Route path="/payment/status/:number" render={(props) => <PaymentStatus {...props} />} exact />
						<Route path="/payment/error" render={() => <PaymentError />} exact />

						{/* Policy */}
						<Route path="/policy" render={() => <Policy />} exact />
						<Route path="/public-offer" render={() => <PublicOffer />} exact />
						<Route path="/regulations" render={() => <Regulations />} exact />

						{/* Go */}
						<Route path="/go/login" render={() => <Login />} exact />
						<Route path="/go/register" render={(props) => <Register {...props} />} exact />

						<Route path="/go/password-recovery" render={() => <PasswordRecoveryEmail />} exact />
						<Route path="/go/password-recovery/:hash" render={(props) => <PasswordRecoveryNewPassword {...props} />} exact />

						<Route path="/go/training" render={() => <Training />} exact />
						<Route path="/go/passing/:courseId/:lessonNum" render={(props) => <PassingCourse {...props} />} exact />

						<Route path="/go/cabinet" render={() => <Cabinet />} exact />
						<Route path="/go/cabinet/subscribe/disable" render={() => <CabinetSubscribeDisable />} exact />

						<Route path="/go/referrals" render={() => <Referrals />} exact />
						<Route path="/go/referrals/policy" render={() => <ReferralsPolicy />} exact />

						<Route render={() => window.location.href = "/"} exact />
					</Switch>
				</React.Suspense>

				{window.location.pathname.indexOf("/payment") !== -1 || window.location.pathname.indexOf("/login") !== -1 || window.location.pathname.indexOf("/register") !== -1 || window.location.pathname === "/go/password-recovery" || window.location.pathname.indexOf("/go/password-recovery") !== -1 ? null : <Footer />}
			</div>}
		</>
	)
}

export default App

