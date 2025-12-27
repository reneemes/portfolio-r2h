import "./resume.css";


function Resume() {
  return (
    <section className="resume">
      <h1 className="resume__title">Resume</h1>
        <iframe
          className="resume__container"
          src={"/assets/resume.pdf"}
          // src={"/assets/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"}
          title="PDF Viewer"
        />
    </section>
  )
}

export default Resume;