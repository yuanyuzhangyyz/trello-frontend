import React from "react";

export function Login(){



    return( <div id="register-login">
    {/* <a class="logo" href="/"></a> */}

    <div class="section-wrapper">
        <div class="account-form">
            <h1>登录到 Trello</h1>
            <form id="register-form" method="POST" action="loginSubmit">
                <div>
                    <label>
                        <input v-model="user.name" class="form-field" autofocus="autofocus" placeholder="输入用户名" />
                    </label>
                </div>
                <div>
                    <label>
                        <input v-model="user.password" type="password" class="form-field" placeholder="输入密码" />
                    </label>
                </div>
                <div>
                    <input type="submit" class="btn btn-success" value="登录" />
                    <span class="signin-signup-separator">或者</span>
                    <input type="button" class="btn" value="注册" />
                </div>
            </form>
        </div>

    </div>
</div>)
}
