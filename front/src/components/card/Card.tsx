import "./Card.css";
import img from "../../assets/GitHub_picture.png";

function Card({ title, description }) {
	return (
		<>
			<a href="#" className="card-container">
				<img src={img} alt="" />
				<div className="card-content">
					<h3>{title}</h3>
					<span>{description}</span>
				</div>
			</a>
		</>
	);
}

export default Card;
