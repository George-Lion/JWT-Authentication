import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Register = () => {
    const history = useHistory();
    const [user, setUser] = useState({});

    const registerUser = async () => {
        try {
            const resp = await fetch("https://3001-4geeksacade-reactflaskh-1n3r28z34jr.ws-eu44.gitpod.io/api/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user)
                })
            const data = await resp.json()
            if (data.created) {
                history.push("/login")
            } else {
                alert('ERROR')
            }
        } catch (e) {
            alert('ERROR')
        }
    }
    return (
        <div className="text-center mt-5 mx-auto" style={{ "width": "1000px" }}>
            <h1 className="mb-5">REGISTER</h1>
            <div className="row mx-auto w-25">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                    }}
                ></input>
            </div >
            <button
                className="btn btn-dark mt-3"
                onClick={() => {
                    registerUser();
                }}> Sign Up
            </button>
        </div >
    );
};