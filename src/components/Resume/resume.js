import "./resume.css";

function Resume() {
  return (
    <section className="resume">
      <h2 className="resume__title">Resume</h2>

      <iframe src="/assets/resume.pdf" className="resume__container" allowFullScreen="true">
        <p>
          Your browser does not support PDFs.
          <a href="/assets/resume.pdf" target="_blank">Download the PDF</a> instead.
        </p>
      </iframe>
    </section>
  )
}

export default Resume;