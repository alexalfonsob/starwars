import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop";
import { Home } from "./views/home";
import { Detail } from "./views/detail";
import { Planet_detail } from "./views/planet_detail";
import injectStore from "./store/appContext";
import "../styles/index.scss";
import Nav from "./component/Main/Nav";


export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Nav />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/detail/:id" name="detail" component={Detail} />
							<Route exact path="/planet_detail/:id" name="detail" component={Planet_detail} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>

					</ScrollToTop>
																

				</BrowserRouter>
			</div>
		
		);
	}
}

export default injectStore(Layout);
