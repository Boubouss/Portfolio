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
				<div className="contact-text">
					<h4 className="contact-title">Need help with a project ?</h4>
					<p className="contact-p">
						I can help you with your projects, whether in web development or
						other, do not hesitate to contact me.
					</p>
					<button className="contact-button">Send</button>
				</div>
			</div>
		</>
	);
}

export default Contact;
