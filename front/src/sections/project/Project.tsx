import "./Project.css";
import projects from "../../data/data.json";
import Card from "../../components/card/Card";

function Project() {
	return (
		<>
			<h3 className="project-title">Projects</h3>
			<div className="project-grid">
				{projects.map((p, k) => (
					<Card key={k} title={p.title} description={p.description} />
				))}
			</div>
		</>
	);
}

export default Project;
