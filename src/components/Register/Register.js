import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {
  userRegisterAction,
  clearRegisterError,
} from "../../store/actions/signupActions";
import "./styles.scss";

export function Register() {
  let history = useHistory();
  const dispatch = useDispatch();
  const register = useSelector((state) => {
    return state.entities.register;
  });

  const [localError, setLocalError] = useState("");
  useEffect(() => {
    if (register.userName) {
      console.log("register.userName", register.userName);
      history.push("/login");
    }
  }, [history, register]);

  const userRegister = (name, password, rePassword) => {
    console.log("name, password, rePassword", name, password, rePassword);
    if (
      name.trim() === "" ||
      password.trim() === "" ||
      rePassword.trim() === ""
    ) {
      setLocalError("用户名和密码不能为空");
    } else if (password !== rePassword) {
      const error = { errorDetails: "两次密码输入不一致" };
      setLocalError(error.errorDetails);
    } else if (name.length < 6 || password.lenght < 6) {
      const error = { errorDetails: "用户名或密码不能小于6位" };
      setLocalError(error.errorDetails);
    }
    dispatch(
      userRegisterAction({
        name: name,
        password: password,
        rePassword: rePassword,
      })
    );
  };
  return (
    <div id="register-login">
      <div className="section-wrapper">
        <div className="account-form">
          <h1>注册新的账号</h1>
          <form id="register-form">
            {register.error && renderErrorMessage(register.error.errorDetails)}
            {localError && renderErrorMessage(localError)}
            <div>
              <label>
                <input
                  className="userNameInput form-field"
                  placeholder="输入用户名"
                  onFocus={() => {
                    dispatch(clearRegisterError());
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="password"
                  className=" password form-field"
                  placeholder="输入密码"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="password"
                  className="repassword password form-field"
                  placeholder="再次输入密码"
                />
              </label>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  userRegister(
                    document.querySelector(".userNameInput").value,
                    document.querySelector(".password").value,
                    document.querySelector(".repassword").value
                  );
                }}
                className="btn btn-success"
              >
                注册
              </button>
              <span className="signin-signup-separator">或者</span>
              <Link to="/login">登录</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const renderErrorMessage = (errors) => {
  if (typeof errors === "string") {
    return <div>{errors}</div>;
  }
  const violationsErrors = errors.map((error) => {
    return Object.values(error.violations);
  });
  return (
    <div>
      {violationsErrors.map((error, index) => {
        return <div key={index}>{error}</div>;
      })}
    </div>
  );
};
