import React from "react";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../store/actions.js";
import "./styles.scss";

export function Login() {
  const dispatch = useDispatch();

  const userLogin = (name, password) => {
    if (name.trim() === "" || password.trim() === "") {
      alert("用户名和密码不能为空");
    }
    dispatch(userLoginAction({ name: name, password: password }));
  };

  return (
    <div id="register-login">
      {/* <a class="logo" href="/"></a> */}

      <div className="section-wrapper">
        <div className="account-form">
          <h1>登录到 Trello</h1>
          <form id="register-form">
            <div>
              <label>
                <input
                  className="userNameInput form-field"
                  //   autoFocus="autofocus"
                  placeholder="输入用户名"
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
