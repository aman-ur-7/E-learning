import React from "react";
import aman from "../assets/aman.jpg";

const Login = () => {
  return (
    <div className="login">
      <section className="image-section">
        <p>
          Login and explore the website which is made by me (Aman Kumar) after
          the hardwork of me i reach here . In this website here a lot's of
          functionalities which you can used to study on the daily basis
        </p>
      </section>
      <section className="login-form">
        <h1>E-learn</h1>
        <h3>Welcome to the login page</h3>
        <form action="" className="form">
          <div className="login-inputs">
            <div>
              <span>User email</span>
              <input type="email" placeholder="E-mail" />
            </div>
            <div>
              <span>User password</span>
              <input type="password" placeholder="password" />
            </div>
          </div>
          <button>submit</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
