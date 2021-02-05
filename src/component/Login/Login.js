import React from 'react';

export function Login() {
  return (
    <div id="register-login">
      {/* <a class="logo" href="/"></a> */}

      <div className="section-wrapper">
        <div className="account-form">
          <h1>登录到 Trello</h1>
          <form id="register-form" method="POST" action="loginSubmit">
            <div>
              <label>
                <input
                  v-model="user.name"
                  className="form-field"
                  //   autoFocus="autofocus"
                  placeholder="输入用户名"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  v-model="user.password"
                  type="password"
                  className="form-field"
                  placeholder="输入密码"
                />
              </label>
            </div>
            <div>
              <input type="submit" className="btn btn-success" value="登录" />
              <span className="signin-signup-separator">或者</span>
              <input type="button" className="btn" value="注册" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
