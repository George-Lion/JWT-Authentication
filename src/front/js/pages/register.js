import React, { useState } from "react";

export const Register = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    const sendUserInfo = async () => {
        if (user.email != null && user.email.trim() != "") {
            setError(null)
            const response = await fetch("https://3001-4geeksacade-reactflaskh-1n3r28z34jr.ws-eu43.gitpod.io/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });
            const data = await response.json();
        } else {
            setError("Bad info");
        }

    }

    return <div className="text-center mt-5">
        <div className="row">
            <label htmlFor="email" className="col-1">Email</label>
            <input id="email" className="col-3" onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
            <label htmlFor="password" className="col-1">password</label>
            <input id="password" className="col-3" onChange={(e) => setUser({ ...user, password: e.target.value })}></input><br />
            <button className="col-2 offset-1" onClick={() => sendUserInfo()}>Sign up</button>
        </div>
        {error != null ? <h3 className="text-danger">{error}</h3> : null}

    </div>
}