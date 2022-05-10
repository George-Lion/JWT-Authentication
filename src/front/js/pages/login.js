import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"
import { useHistory } from "react-router-dom";
/* import "../../styles/home.css"; */

export const Login = () => {
    const history = useHistory();
    const { actions } = useContext(Context);
    const [user, setUser] = useState({});

    const loginUser = async () => {
        try {
            const resp = await fetch("https://3001-4geeksacade-reactflaskh-1n3r28z34jr.ws-eu44.gitpod.io/api/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                })
            const data = await resp.json();
            if (data.token) {
                localStorage.setItem("token", data.token);
                actions.verify();
                history.push("/home");
            } else {
                alert('ERROR')
            }
        } catch (e) {
            alert('ERROR')
        }
    };
    return (
        <div className="text-center mt-5 mx-auto " style={{ "width": "1000px" }}>
            <h1 className="mb-5">LOGIN</h1>
            <div className="row mx-auto w-25" >
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                ></input>
                <label htmlFor="password" >Password</label>
                <input
                    id="password"
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                    }}
                ></input>
            </div>
            <button
                className="btn btn-dark mt-3"
                onClick={() => {
                    loginUser();
                }}> Login
            </button>
        </div >
    );

}