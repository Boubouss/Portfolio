import "./Input.css";

function Input({ id, label, type }) {
	return (
		<>
			<div className="input-container">
				<label htmlFor={id}>{label}</label>
				{type == "textarea" ? (
					<textarea id={id}></textarea>
				) : (
					<input id={id} type={type} />
				)}
			</div>
		</>
	);
}

export default Input;
