import "./resume.css";


function Resume() {
  return (
    <section className="resume">
      <h1 className="resume__title">Resume</h1>
        <iframe
          className="resume__container"
          src={"/assets/resume.pdf"}
          title="PDF Viewer"
        />
    </section>
  )
}

export default Resume;