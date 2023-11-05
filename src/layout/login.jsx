import { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../config";
export const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [isLoginForm, setIsLoginForm] = useState(true);
  const handleChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="login-section">
      <div className="LoginView">
        <h3 className="LoginView-title">Chat Application</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            placeholder="ex: email@example"
            value={userInfo.email}
            name="email"
            onChange={handleChange}
          />
          <input
            placeholder="******"
            type="password"
            value={userInfo.password}
            name="password"
            onChange={handleChange}
          />
          <button> {isLoginForm ? "Login" : "Register"}</button>
        </form>
        <button className="LoginView-button" onClick={() => signInWithGoogle()}>
          Login With Google
        </button>
        <button
          className="create-new"
          onClick={() => setIsLoginForm(!isLoginForm)}
        >
          {isLoginForm ? "Create New Account ?" : "Back to Login"}
        </button>
      </div>
    </section>
  );
};
