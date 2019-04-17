import React from "react";
import { Context } from "../store/appContext";


export class Detail extends React.Component {

	render() {

		return (
			<div className="container">
				<div className="container">
					<Context.Consumer>
						{
							({ store, characters, actions }) => {
							

							let ids = parseInt(this.props.match.params.id);
							
				                return store.characters.filter((characters)  => store.characters.indexOf(characters) === ids).map((characters) => (
	
				                  
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
											<h5 className="mt-0">{ characters.name }</h5>
										</div>
									</div>
									<div className="dropdown-divider"></div>
									<div className="container">
										<div className="row">
										    <div className="col">Name</div>
										    <div className="col">Birth Year</div>
										    <div className="col">Gender</div>
										    <div className="col">Height</div>
										    <div className="col">Skin Color</div>
										    <div className="col">Eye Color</div>
										<div class="w-100"></div>
										    <div className="col">{ characters.name }</div>
										    <div className="col">{ characters.birth_year }</div>
										    <div className="col">{ characters.gender }</div>
										    <div className="col">{ characters.height }</div>
										    <div className="col">{ characters.skin_color }</div>
										    <div className="col">{ characters.eye_color }</div>
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

