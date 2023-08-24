import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useData } from "../../src/DataContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setDataFromLogin } = useData();

  function refreshPage() {
    window.location.reload(true);
  }

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("fields are menditory");
    }

    try {
      const loginResponse = await axios.post(
        "http://localhost:7001/user/login",
        { email, password }
      );
      if (loginResponse) {
        setDataFromLogin(loginResponse);
        localStorage.setItem("dataToPersist", JSON.stringify(loginResponse));
        navigate("/elearn", { replace: true });
      }
    } catch (error) {
      alert("Your email and password is incorrect");
      setTimeout(() => {
        refreshPage();
      }, 2000);
    }
  };

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
        <form className="form" onSubmit={login}>
          <div className="login-inputs">
            <div>
              <span>User email</span>
              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <span>User password</span>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
