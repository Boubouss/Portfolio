import "./Project.css";
import projects from "../../data/data.json";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";

function Project() {
	return (
		<>
			<Title text="What I built" />
			<div className="project-grid">
				{projects.map((p, k) => (
					<Card key={k} title={p.title} description={p.description} />
				))}
			</div>
		</>
	);
}

export default Project;
