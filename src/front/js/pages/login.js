import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"
import { useHistory } from "react-router-dom";
import "../../styles/login.css";


export const Login = () => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    const sendUserInfo = async () => {
        if (user.email != null && user.email.trim() != "") {
            setError(null)
            const response = await fetch("https://3001-4geeksacade-reactflaskh-1n3r28z34jr.ws-eu43.gitpod.io/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            if (data.logged == false) {
                setError("Bad info")
            } else if (data.logged == true) {
                localStorage.setItem("token", data.token)
                actions.setStoreUser(data.user)
                history.push("/")

            }
        } else {
            setError("Bad info");
            setTimeout(() => {
                setError(null)
            }, 2000);
        }
    }

    return <div className="text-center mt-5">
        <div className="row">
            <label htmlFor="email" className="col-1">Email</label>
            <input id="email" className="col-3" onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
            <label htmlFor="password" className="col-1">password</label>
            <input id="password" className="col-3" onChange={(e) => setUser({ ...user, password: e.target.value })}></input><br />
            <button className="col-2 offset-1" onClick={() => sendUserInfo()}>Login</button>
        </div>
        {error != null ? <h3 className="text-danger">{error}</h3> : null}
    </div>
}