import React, { useState, useEffect } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [intrest, setIntrest] = useState();

  const handleToggle = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
    setShowPassword((password) => !password);
  };

  useEffect(() => {
    const signUp = (e) => {
      e.preventDefault();
    };

    return () => signUp();
  }, []);

  return (
    <div className="sign-up" onSubmit={""}>
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
            <span>User intrest</span>
            <input
              type="text"
              placeholder="User intrest"
              onChange={(e) => setIntrest(e.target.value)}
            />
          </div>
        </section>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUp;
