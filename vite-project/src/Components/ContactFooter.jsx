import React, { useEffect, useState } from "react";
import AdvertiseComponent from "./AdvertiseComponent";
import { BsFacebook } from "react-icons/bs";
import { RxInstagramLogo } from "react-icons/rx";
import { RiLinkedinFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useData } from "../DataContext";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const ContactFooter = () => {
  const [mail, setMail] = useState();
  const { dataFromLogin } = useData();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(true);
  }
  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const respond = await axios.post(
        "http://localhost:7001/user/email",
        { mail, dataFromLogin },
        config
      );
      if (respond) {
        alert("Good for the email");
        navigate("/*");
      }
    } catch (error) {
      alert("RE login");
      setTimeout(() => {
        refreshPage();
      }, 0);
    }
  };

  return (
    <section className="contact-footer">
      <div className="advertise">
        <div>
          <AdvertiseComponent />
        </div>
        <div>
          <h1>
            Join <span>World's largest</span>learning platform today
          </h1>
          <h3>Start learning by registering for free</h3>
          <p>
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
            Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
            nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
          </p>
          <button>Sign up for Free</button>
        </div>
      </div>
      <div className="contact-page">
        <section className="e-dex">
          <h1>
            <span>e</span>Dex
          </h1>
          <div className="contact-content">
            <h3>Contact Us</h3>
            <div>
              <span>9334555698</span>
              <span>Jharkhand , Dhanbad </span>
              <span>Email : amandhn5973@gmail.com</span>
              <div className="social-media">
                <Link
                  to="https://www.google.com/search?q=fackebook&rlz=1C1ONGR_enIN989IN989&oq=facke&aqs=chrome.0.69i59j69i57l2j69i59j69i60.1079j0j7&sourceid=chrome&ie=UTF-8"
                  relative="path"
                >
                  <BsFacebook size={30} color="#53586c" />
                </Link>
                <Link to="https://www.instagram.com/" relative="path">
                  <RxInstagramLogo size={30} color="#d7216a" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/aman-kumar-5482b426a"
                  relative="path"
                >
                  <RiLinkedinFill size={30} color="blue" />
                </Link>
                <Link to="https://github.com/aman-ur-7" relative="path">
                  <BsGithub size={30} color="white" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="explore">
          <h1>Can Explore</h1>
          <div>
            <span>Home</span>
            <span>About</span>
            <span>Course</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
        </section>
        <section className="category">
          <h1>Category</h1>
          <div>
            <span>MERN</span>
            <span>React</span>
            <span>Front-end</span>
            <span>Business</span>
            <span>Bug-fix</span>
          </div>
        </section>
        <section className="subscribe">
          <h1>Subscribe</h1>
          <div>
            <p>
              Lorem Ipsum has been them an industry printer took a galley make
              book.
            </p>
            <input
              type="text"
              placeholder="write the experience"
              onChange={(e) => setMail(e.target.value)}
            />
            <Button
              leftIcon={<EmailIcon />}
              colorScheme="teal"
              variant="solid"
              onClick={sendEmail}
              isLoading={loading}
            >
              Email
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactFooter;
