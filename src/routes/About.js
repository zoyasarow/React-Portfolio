import "../styles/about.css";
import profileImg from "../images/headshot.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="title-container">
                <h2 className="profile-title"> About </h2>
            </div>
            <div className="row align-items-start">
                <div className="col">
                    <img src={profileImg} alt='profile-img' className="profile-img" />
                </div>
                <div className="col">
                    <p className="bio-text">
                    Zoya Sarow (they/them) is a Fullstack Web Developer Student who just completed their certification at DU & 2U Coding Bootcamp.
                    </p>
                    <p>
                    They are from Denver, and are working with the intention of increasing the presence of Queer & Non-Binary folks working in tech! They are a member of a Vogue Kiki House, House of Flora, a performance group that centers BIPOC community & ballroom culture (see Netflix's <i>Pose</i> or <i>Paris is Burning</i>), as well as a self-taught photographer and videographer. 
                    </p>
                    <p>
                    They carry community, radical re-imagination & creativity into their coding and cannot wait to continue to grow in this journey of development. They are trained in the languages of CSS, HTML, Javascript, SQL, React & are continuing to learn!
                    </p>
                </div>
            </div>
        </div> 
    );
};

export default About;