import { useState } from "react";
import { login } from "../api/Api";
import { UserConsumer } from "../components/context/UserContext";

export const LoginPage = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [loginState, setLoginState] = useState({
    error: null,
    loading: false,
  });

  const handleInputLogin = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e, onLogin) => {
    e.preventDefault();

    setLoginState({ loading: true, error: null });
    const { username, password } = loginForm;
    login(username, password)
      .then((user) => {
        setLoginState({ loading: false });
        (onLogin) && onLogin(user);
      })
      .catch((error) => {
        setLoginState({ error, loading: false });
      });
  };

  return (
    <UserConsumer>
      {
        ({ onLogin }) =>
        <div className="login-page">
          <h2>LOGIN</h2>
          <form className="login-page__form" onSubmit={(e) => handleSubmit(e, onLogin)}>
            <label className="login-page__label">
              Username
              <input
                className="login-page__input"
                required
                name="username"
                value={loginForm.username}
                onChange={handleInputLogin}
              />
            </label>
            <label className="login-page__label">
              Password
              <input
                className="login-page__input"
                required
                value={loginForm.password}
                type="password"
                name="password"
                onChange={handleInputLogin}
              />
            </label>
            {
              (!!loginState.error)
              && <div className="login-page__error">
                {loginState.error.message}
              </div>
            }
            <button
              className="login-page__button"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      }
    </UserConsumer>
  );
}