import React from "react"
import profile from "../assets/profile_pic.png"
import { signOut } from "firebase/auth"

function Nav({profile}) {
    return (
        <div className="nav">
            <div>
                <input type="text" placeholder="" />
            </div>
            <div className="profile">
                <div className="profile-img">
                    <img src={`${profile}`} alt="profile-pic" />
                </div>
                <button onClick={signOut}>Logout</button>
            </div>
        </div>
    )
}

export default Nav
