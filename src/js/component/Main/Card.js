import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

//create your first component

export default function Card(props) {
	Card.propTypes = {
		id: PropType.number,
		img: PropType.string,
		name: PropType.string,
		gender: PropType.string,
		hair_color: PropType.string,
		eye_color: PropType.string,
		
	};
	return (
		<div className="card h-100">
			<img className="card-img-top" src={props.img} alt="" />

			<div className="card-body">
				<h4 className="card-title">{props.name}</h4>
				<p className="card-text m-0">Gender: {props.gender}</p>
				<p className="card-text m-0">Hair Color: {props.hair_color}</p>
				<p className="card-text m-0">Eyes-Color: {props.eye_color}</p>
			</div>
			

			
			<div className="card-footer space-between ">
					<Context.Consumer>

						{({ store, actions }) => {
							return (

							<Link to={`/detail/${props.id}`} params={{ id: props.id }}>
						
		
								<button type="button" className="btn btn-outline-primary"  >
									Learn more!
								</button>
		
							</Link>

									);
						}}
					</Context.Consumer>
					
					<Context.Consumer>
					{({ store, actions }) => {
						return (

						<button type="button" id={props.name}  className="btn btn-outline-primary"  onClick={e => actions.addFavorites(e.target.id) }>
							♡
						</button>

							);
						}}
					</Context.Consumer>

			</div>
		</div>

	);
}
