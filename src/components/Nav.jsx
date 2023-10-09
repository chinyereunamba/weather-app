import React from "react"
import profile from "../assets/profile_pic.png"

function Nav() {
    return (
        <div className="nav">
            <div className="profile">
                <div className="profile-img">
                    <img src={profile} alt="profile-pic" />
                </div>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Nav
