import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import profil from "../../assets/profil.png";

function Header() {
	return (
		<div className="header">
			<div className="text-side">
				<h1 className="name">Redwane Bouselham</h1>
				<h3 className="title-intro">
					I’m passionate about software development and solving complex
					problems.
				</h3>
				<p className="text-intro">
					Hi, I'm Redwane,{" "}
					<a href="https://42.fr/" target="_blank">
						student at 42 Paris
					</a>
					. I'm focused on improving my skills in <span>C/C++</span> and
					<span> web development</span>. On this site, I’m sharing the projects
					I’ve worked on during my learning journey.
				</p>
				<div className="social-links">
					<a href="https://github.com/Boubouss" target="_blank">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a
						href="https://www.linkedin.com/in/redwane-bouselham-2145bb159/"
						target="_blank"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href="https://x.com/sangocat" target="_blank">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
			</div>
			<div className="picture-side">
				<img className="profil-picture" src={profil} alt="Ma tete de bg" />
			</div>
		</div>
	);
}

export default Header;
