import "../styles/resume.css";

const Resume = () => {
    return (
    <div className="resume-page-container">
      <h1 className="title">Resume</h1>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Let's Collab | Check Out My Experiences!</h5>
          <p className="card-text">
            Download my resume by clicking the button below:
          </p>
          <a
            href="https://drive.google.com/file/d/1r0K3O_kCvo_PlanmCxT5c-sWAlXGPLw9/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Resume
          </a>
        </div>
      </div>
    </div> 
  );
};

export default Resume;