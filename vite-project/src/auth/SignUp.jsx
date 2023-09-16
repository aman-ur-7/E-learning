import React, { useState, useEffect } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import axios from "axios";
import * as react from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [intrest, setIntrest] = useState();
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
    setShowPassword((password) => !password);
  };

  function refreshPage() {
    window.location.reload(true);
  }

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!password || !email || !name) {
      alert("fill the fields first");
      setTimeout(() => {
        refreshPage();
      }, 2000);
    }

    const passwordRegex = /^[a-zA-Z0-9]*$/;

    if (!passwordRegex.test(password)) {
      alert("use one uppercase , one lowercase and one digit");
      setTimeout(() => {
        refreshPage();
      }, 2000);
    }

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const respond = await axios.post(
        "http://localhost:7001/user/register",
        {
          name,
          email,
          intrest,
          password,
        },
        config
      );

      if (respond) {
        setLoading(false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        refreshPage();
      }, 2000);
    }
  };

  return (
    <div className="sign-up" onSubmit={signUp}>
      <h1>Welcome To The Sign-up Page</h1>
      <form>
        <section>
          <div>
            <span>User name</span>
            <input
              type="text"
              placeholder="User name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <span>User email</span>
            <input
              type="email"
              placeholder="User email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <span>User password</span>
            <div className="eye-display">
              <input
                type={type}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <span onClick={handleToggle}>
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </span>
            </div>
          </div>
          <div>
            <span>Development intrest</span>
            <input
              type="text"
              placeholder="Intrest"
              onChange={(e) => setIntrest(e.target.value.toLowerCase())}
            />
          </div>
        </section>
        <react.Button type="submit" isLoading={loading}>
          submit
        </react.Button>
      </form>
    </div>
  );
};

export default SignUp;
