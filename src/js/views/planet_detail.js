import React from "react";
import { Context } from "../store/appContext";

export class Planet_detail extends React.Component {

	render() {

		return (
			<div className="container">
				<div className="container">
					<Context.Consumer>
						{
							({ store, planet, actions }) => {
							console.log(store.planet);
							let ids = parseInt(this.props.match.params.id);
							
				                return store.planet.filter((planet)  => store.planet.indexOf(planet) === ids).map((planet) => (
	
				                  
								<div className="container">
									<div className="media">
										<figure class="figure">
											<img
												src="http://placehold.it/500X300/"
												className="align-self-start mr-3"
												alt="..."
											/>
										</figure>
										<div className="media-body">
											<h5 className="mt-0">{ planet.name }</h5>
										</div>
									</div>
									<div className="dropdown-divider"></div>
									<div className="container">
										<div className="row">
										    <div className="col">Name</div>
										    <div className="col">Climate</div>
										    <div className="col">Population</div>
										    <div className="col">Orbital Period</div>
										    <div className="col">Rotation Period</div>
										    <div className="col">Diameter</div>
										<div class="w-100"></div>
										    <div className="col">{ planet.name }</div>
										    <div className="col">{ planet.climate }</div>
										    <div className="col">{ planet.population }</div>
										    <div className="col">{ planet.orbital_period }</div>
										    <div className="col">{ planet.rotation_period }</div>
										    <div className="col">{ planet.diameter }</div>
									  </div>
								</div>
							</div>			                  
							))}
						}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
