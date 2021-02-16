import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {
  userLoginAction,
  clearLoginError,
} from "../../store/actions/loginActions";
import "./styles.scss";

export function Login() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [isUserInput, setIsUserInput] = useState(false);
  const userLogin = (name, password) => {
    if (name.trim() === "" || password.trim() === "") {
      alert("用户名和密码不能为空");
    }
    dispatch(userLoginAction({ name: name, password: password }));
  };
  const user = useSelector((state) => {
    return state.entities.user;
  });
  useEffect(() => {
    if (user.userName) {
      history.push("/boardhome");
    }
  }, [history, user]);
  return (
    <div id="register-login">
      <div className="section-wrapper">
        <div className="account-form">
          <h1>登录到 Trello</h1>
          <form id="register-form">
            {user.error
              ? user.error && !isUserInput && renderErrorMessage(user.error)
              : null}
            <div>
              <label>
                <input
                  className="userNameInput form-field"
                  onFocus={() => {
                    setIsUserInput(true);
                    dispatch(clearLoginError());
                  }}
                  onBlur={() => {
                    setIsUserInput(false);
                  }}
                  placeholder="输入用户名"
                  maxLength="32"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  onFocus={() => {
                    setIsUserInput(true);
                    dispatch(clearLoginError());
                  }}
                  onBlur={() => {
                    setIsUserInput(false);
                  }}
                  type="password"
                  className=" password form-field"
                  placeholder="输入密码"
                  maxLength="32"
                />
              </label>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  userLogin(
                    document.querySelector(".userNameInput").value,
                    document.querySelector(".password").value
                  );
                }}
                className="btn btn-success"
              >
                登录
              </button>
              <span className="signin-signup-separator">或者</span>
              <Link to="/signup">注册</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const renderErrorMessage = (error) => {
  return <div>{error.errorDetails}</div>;
};
