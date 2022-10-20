import PortfolioCard from "../components/PortCard";
import "../styles/portfolio.css";

import WeatherDash from "../images/weather.jpg";
import NodeProfileGenerator from "../images/team.jpg";
import WorkoutGuide from "../images/workout.jpg";
import WorkdayScheduler from "../images/scheduler.jpg";
import ExpressNoteTaker from "../images/notetaker.jpg";
import ECommerceBackend from "../images/commerce.jpg";
import PWATextEditor from "../images/text-editor.jpg";
import InspirerApp from "../images/inspirer2.jpg"

const Portfolio = () => {

    const projects = [
        {
            title: "Inspirer Art & Design App",
            image: InspirerApp,
            description: "This application helps users quickly view art from the Chicago Institute of Art combined with random color palette's designed as a web application, built with interactive components that allows you to create your own profile of saved aesthetics",
            prod: "https://inspirer-app.herokuapp.com/",
            repo: "https://github.com/zoyasarow/Inspirer-app",
            id: 1,
        },
        {
            title: "JATE PAW Text-Editor",
            image: PWATextEditor,
            description: "The JATE text editor is built to display PWA functionality via webpacks and various other dependencies (including those that allow it to function offline). It uses the 'idb' package, and is installable on the browser!",
            prod: "https://jate-jate-jate.herokuapp.com/",
            repo: "https://github.com/zoyasarow/JATE-text-editor",
            id: 2,
        },
        {
            title: "Weather Dashboard",
            image: WeatherDash,
            description: "The purpose of this application is to allow travelers to check the weather of different cities, in order to plan a trip accordingly!",
            prod: "https://zoyasarow.github.io/Weather-Dashboard/",
            repo: "https://github.com/zoyasarow/Weather-Dashboard",
            id: 3,
        },

        {
            title: "E-Commerce Backend App",
            image: ECommerceBackend,
            description: "This application uses Node, Express, MySQL, and Sequelize to model the backend functionality of a digital or electronic store by using GET, POST, DELETE and other routes to keep track of products and other important data",
            prod: "https://drive.google.com/file/d/1pI8bk--Tu2W2Fjeu77a8Yo14LsVEKhJu/view",
            repo: "https://github.com/zoyasarow/ORM-E-Commerce-Backend",
            id: 4,
        },
        
        {
            title: "Abs-olutely API Workout Guide",
            image: WorkoutGuide,
            description: "This application uses various third party API's to provide gym goers with information to create a more accessible workout experience",
            prod: "https://dostorrez.github.io/ABS-olutelyWorkoutGuide/",
            repo: "https://github.com/zoyasarow/ABS-olutelyWorkoutGuide",
            id: 5,
        },

        {
            title: "Node Profile Generator",
            image: NodeProfileGenerator,
            description: "This application uses Node & Inquirer to allow workplaces & teams to enter information about each employee broken down by job title in order to create a team profile with accessible contact information!",
            prod: "https://drive.google.com/file/d/1BoA3S-Lq5jIlma5WlJArQoOo8CSwQqic/view",
            repo: "https://github.com/zoyasarow/Node-Team-Profile-Generator",
            id: 6,
          },
        
        {
            title: "Work Day Scheduler",
            image: WorkdayScheduler,
            description: "This application uses Moment.js & javascript functions to allow users to create events during a workday using time blocks that are saved to local storage and rendered on the screen with each save",
            prod: "https://zoyasarow.github.io/Work-Day-Scheduler/",
            repo: "https://github.com/zoyasarow/Work-Day-Scheduler",
            id: 7,
        },
      
        {
            title: "Express Note Taker",
            image: ExpressNoteTaker,
            description: "This application allows users to create notes & reminders and save them to a JSON data file using Express.js, Node & npm modules",
            prod: "https://zoya-note-taker.herokuapp.com/",
            repo: "https://github.com/zoyasarow/Express-Note-Taker",
            id: 8,
        },
    
      ];
    
      return (
        <div className="portfolio-container">
          <h1 className="title">Portfolio</h1>
          <div className="project-container">
            {projects.map((project) => (
              <PortfolioCard
                title={project.title}
                image={project.image}
                description={project.description}
                repo={project.repo}
                prod={project.prod}
                id={project.id}
                key={project.id}
                />
              ))}
          </div>
        </div>
      )
    } 
    
    export default Portfolio;
