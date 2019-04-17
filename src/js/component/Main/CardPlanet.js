import React from "react";
import PropType from "prop-types";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

export default function CardPlanet(props) {
	CardPlanet.propTypes = {
		id: PropType.number,
		img: PropType.string,
		name: PropType.string,
		population: PropType.string,
		terrain: PropType.string,
	};
	return (
		<div className="card h-100">
			<img className="card-img-top" src={props.img} alt="" />

			<div className="card-body">
				<h4 className="card-title">{props.name}</h4>
				<p className="card-text m-0">population: {props.population}</p>
				<p className="card-text m-0">terrain: {props.terrain}</p>
			</div>
			<div className="card-footer">

				<Link to={`/planet_detail/${props.id}`}>
					<Context.Consumer>
						{({ actions }) => {
							return (
	
						<button type="button"  className="btn btn-outline-primary"  >
							Learn more!
						</button>
	
							);
						}}
					</Context.Consumer>
				</Link>
				
				<Context.Consumer>
					{({ store, actions }) => {
						return (

						<button type="button" id={props.name}  className="btn btn-outline-warning"  onClick={e => actions.addFavorites(e.target.id) }>
							♡
						</button>

							);
						}}
					</Context.Consumer>


			</div>
		</div>
	);
}
