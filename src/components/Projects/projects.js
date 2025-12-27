import "./projects.css";

function Projects() {
  const downTheRabbitHole = [
		"React",
		"React Router",
		"JavaScript",
		"HTML",
		"CSS",
		"Cypress",
		"Ruby on Rails",
		"RSpec",
		"SimpleCov",
		"WebMock & VCR"
	];

	const rancidTom = [
		"React",
		"React Router",
		"JavaScript",
		"HTML",
		"CSS",
		"Cypress"
	];

	const trackerTech = [
		"React",
		"React Router",
		"Tailwind CSS",
		"TypeScript",
		"JavaScript",
		"HTML",
		"Cypress",
		"Ruby on Rails",
		"RSpec",
		"SimpleCov",
		"JWT Tokens"
	];

	const yogaFlowTech= [
		"Angular",
		"TypeScript",
		"SASS",
		"HTML",
		"Ruby on Rails",
		"JWT Tokens",
		"RSpec",
		"SimpleCov",
		"Faraday",
		"WebMock & VCR"
	];

	const affirmationsTech = [
		"Electron",
		"React",
		"React Router",
		"TypeScript",
		"HTML",
		"SCSS"
	];


  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>
      <div className="projects__grid">

        <div className="project">
          <a className="project__img" href="https://yogaflow-app.netlify.app/" target="_blank" rel="noreferrer"><img src={"/assets/yoga-flow.png"} className="project__img" alt="thumbnail" width="100%"/></a>
					<a className="project__title" href="https://yogaflow-app.netlify.app/" target="_blank" rel="noreferrer"><h2>YogaFlow</h2></a>
					<p className="project__description">YogaFlow is a web application where users can explore, create, and track personalized yoga routines. 
						The app combines the benefits of a guided yoga practice with flexibility, offering curated routines for all levels.</p>
					<div className="chips">
						<span className="chips__title">Tech:</span>
						{yogaFlowTech.map((label, index) => (
							<span key={index} className="chips__info">
								{label}
							</span>
						))}
          </div>
        </div>

				<div className="project">
					<a className="project__img" href="https://tracker-crm-fe-38f7cf1aaca5.herokuapp.com/" target="_blank" rel="noreferrer"><img src={"/assets/tracker.png"} className="project__img" alt="thumbnail" width="100%"/></a>
					<a className="project__title" href="https://tracker-crm-fe-38f7cf1aaca5.herokuapp.com/" target="_blank" rel="noreferrer"><h2>Tracker CRM</h2></a>
					<p className="project__description">An application for tracking companies, managing contacts, and organizing job applications all in one place.</p>
					<div className="chips">
						<span className="chips__title">Tech:</span>
						{trackerTech.map((label, index) => (
							<span key={index} className="chips__info">
								{label}
							</span>
						))}
					</div>
				</div>

				<div className="project">
					<a className="project__img" href="https://down-the-rabbit-hole.netlify.app/" target="_blank" rel="noreferrer"><img src={"/assets/dtrh.png"} className="project__img" alt="thumbnail" /></a>
					<a className="project__title" href="https://down-the-rabbit-hole.netlify.app/" target="_blank" rel="noreferrer"><h2>Down the Rabbit Hole</h2></a>
					<p className="project__description">Designed and developed a full stack educational web application intended to immerse users in the fascinating world of animals and their ecosystems.</p>
					<div className="chips">
						<span className="chips__title">Tech:</span>
						{downTheRabbitHole.map((label, index) => (
							<span key={index} className="chips__info">
								{label}
							</span>
						))}
					</div>
				</div>

				<div className="project">
					<a className="project__img" href="https://github.com/reneemes/affirmations" target="_blank" rel="noreferrer"><img src={"/assets/affirmations.png"} className="project__img" alt="thumbnail" width="100%"/></a>
					<a className="project__title" href="https://github.com/reneemes/affirmations" target="_blank" rel="noreferrer"><h2>Daily Affirmations</h2></a>
					<p className="project__description">Daily Affirmations is a minimalist React and Electron audio player that plays relaxing tracks and displays positive affirmations for mindfulness and motivation.</p>
					<div className="chips">
						<span className="chips__title">Tech:</span>
						{affirmationsTech.map((label, index) => (
							<span key={index} className="chips__info">
								{label}
							</span>
						))}
					</div>
				</div>
      </div>
    </div>
  )
}

export default Projects;