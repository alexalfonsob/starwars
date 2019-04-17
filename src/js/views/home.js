import React from "react";
import Card from "../component/Main/Card";
import CardPlanet from "../component/Main/CardPlanet";
import { Context } from "../store/appContext";

export class Home extends React.Component {

	render() {
		return (
			<div className="container">
				<div className="container2">
					<h1>Character</h1>
				</div>
				<div className="scrolling-wrapper">

					<Context.Consumer>
					{
						({ store, actions }) => {
							
			                return store.characters.map((characters, i) => (
	
								<div className="card mr-2 ">
									<Card
										id={i}
										img="http://placehold.it/500x325"
										name={ characters.name }
										gender={ characters.gender }
										hair_color={ characters.hair_color }
										eye_color={ characters.eye_color }
										
	
									/>
								</div>
			                ))}               
					}

				</Context.Consumer>

				</div>
					
				<div className="container-2">
					<h1>Planet</h1>
				</div>

				<div className="scrolling-wrapper">

					<Context.Consumer>
					{
						({ store, planet, actions }) => {
							
			                return store.planet.map((planet, i) => (
	
								<div className="card mr-2 ">
									<CardPlanet
										id={i}
										img="http://placehold.it/500x325"
										name={ planet.name }
										population={ planet.population }
										terrain={ planet.terrain }
									/>
								</div>
			
			                ))}       
					}

				</Context.Consumer>
				</div>
			</div>
		);
	}
}
