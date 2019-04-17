import React from "react";
import getState from "./flux.js";
export const Context = React.createContext(null);

const injectStore = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore),
					})
			});
		}

		componentDidMount() {
			
			this.state.actions.getCharacters(`https://swapi.co/api/people/`);
			this.state.actions.getPlanets(`https://swapi.co/api/planets/`);
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectStore;
