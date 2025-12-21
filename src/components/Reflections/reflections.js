import "./reflections.css";

function Reflections() {
  
  return (
    <section className="reflections">
      <article className="reflection__article">
        <h2 className="reflection__article-title">Professional Development</h2>
        <p className="reflection__article-body">
          My plan for the future, during my time at Road to Hire and throughout my professional career,
          is to polish my communication skills. Specifically in public speaking and interviews.
          I will accomplish this through presentations and mock interviews during Road to Hire.
        </p>
      </article>
      <article className="reflection__article">
        <h2 className="reflection__article-title">Technical</h2>
        <p className="reflection__article-body">
          My goal for technical skill development is to build upon my experiences over the past year. 
          I am looking to push myself to go above and beyond on the assignments and projects, as well as strengthen my
          foundation in PostgreSQL and learning Node.js.
        </p>
      </article>
      <article className="reflection__article">
        <h2 className="reflection__article-title">Personal</h2>
        <p className="reflection__article-body">
          Intensive programs like Road to Hire take a lot of time and energy.
          I know from personal experience with rigorous programs that they can lead to burnout and self doubt.
          I plan to combat that utilizing time boxing, a task manager, giving myself small breaks.
        </p>
      </article>
    </section>
  );
}

export default Reflections;