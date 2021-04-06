import React, { useState } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="container center vh-100 ">
      <form onSubmit={handleSubmit} >
        <div className="row flex-row-reverse">
          <div className="col-3">
            <div className="form-group">
              <input
                dir="rtl"
                type="text "
                className="form-control"
                id="name"
                placeholder="نام کاربری"
                name="name"
                required={true}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row flex-row-reverse">
          <div className="col-3">
            <div className="form-group">
              <input
                dir="rtl"
                type="password"
                className="form-control"
                id="name"
                placeholder="رمز عبور"
                name="name"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row flex-row-reverse">
          <div className="col-3">
            <div className="form-group">
              <button type="submit" name="" id="" class="btn btn-primary btn-lg btn-block">ورود</button>
            </div>
          </div>
        </div>
       
      </form>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
