import "./Contact.css";
import Title from "../../components/title/Title";
import Input from "../../components/input/Input";

function Contact() {
	return (
		<>
			<Title text="Let's get in touch" />
			<div className="contact-container">
				<div className="contact-form">
					<Input id="name" label="Name" type="text" />
					<Input id="email" label="Email" type="email" />
					<Input id="message" label="Message" type="textarea" />
				</div>
				<div className="contact-text"></div>
			</div>
		</>
	);
}

export default Contact;
