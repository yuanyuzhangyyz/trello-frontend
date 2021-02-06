import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction, clearError } from "../../store/actions.js";
import "./styles.scss";

export function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.entities.user;
  });
  const [isUserInput, setIsUserInput] = useState(false);
  const userLogin = (name, password) => {
    if (name.trim() === "" || password.trim() === "") {
      alert("用户名和密码不能为空");
    }
    dispatch(userLoginAction({ name: name, password: password }));
  };
  console.log("user", user, isUserInput);
  return (
    <div id="register-login">
      {/* <a class="logo" href="/"></a> */}
      <div className="section-wrapper">
        <div className="account-form">
          <h1>登录到 Trello</h1>
          <form id="register-form">
            {user.error && !isUserInput && renderErrorMessage(user.error)}
            <div>
              <label>
                <input
                  className="userNameInput form-field"
                  onFocus={() => {
                    setIsUserInput(true);
                    dispatch(clearError());
                  }}
                  onBlur={() => {
                    setIsUserInput(false);
                    console.log("onblur input", isUserInput);
                  }}
                  placeholder="输入用户名"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  onFocus={() => {
                    setIsUserInput(true);
                    dispatch(clearError());
                  }}
                  onBlur={() => {
                    setIsUserInput(false);
                    console.log("onblur password input", isUserInput);
                  }}
                  type="password"
                  className=" password form-field"
                  placeholder="输入密码"
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
              <input type="button" className="btn" value="注册" />
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
