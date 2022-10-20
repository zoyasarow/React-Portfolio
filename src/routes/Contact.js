import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        form.current,
        "user_id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
    
return (
    <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <h1 className="contact-title">I would love to hear from you!</h1>
            <div className="form-group">
                <label for="exampleName">Name</label>
                <input type="name" className="form-control" id="exampleName" placeholder="Enter Your Name"/>
            </div>
            <div className="form-group">
                <label for="examplePronouns">Pronouns</label>
                <input type="name" className="form-control" id="examplePronouns" placeholder="Enter Your Pronouns"/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
                <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else.</small>
            </div>
            <button type="submit" className="btn btn-primary">Talk Soon!</button>
        </form>
    </div>  
  );
};

export default Contact;