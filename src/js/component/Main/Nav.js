import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export default function Nav(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<div className="container">
				<Link to="/">
						<img className="navbar-brand" 
							src="https://img.icons8.com/color/48/000000/star-wars.png"
							alt="starwars"
						/>
				</Link>

				<div className="dropdown">
					<button
						className="btn btn-lg btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites{" "}
						<span className="badge badge-secondary">
							<Context.Consumer>
							{
								({actions}) =>{
			    					return actions.countFavorites() 
								}
							}
							</Context.Consumer>
						</span>
					</button>
				
						
			      	<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<ul>
							<Context.Consumer>
								{
									({store, actions}) =>{
									if (store.favorites.length === 0){
										return (<li key="0" className="list-group-item-action dropdown-item" >(empty)</li>)
									}
									

				    					return store.favorites.map((favorites, i) => (
											<li key={i} className="list-group-item-action dropdown-item">{favorites}
												<span className="span">
													<i className="fas fa-times"  onClick={() => actions.deleteFavorites(i)} >
													<img src="https://img.icons8.com/ios-glyphs/20/000000/trash.png" alt= "remove"/>
													</i>
												</span>
											</li>
										)	
			            			)}
								}
							</Context.Consumer>
						</ul>
	        		</div>
				</div>
			</div>
		</nav>
	);
}
