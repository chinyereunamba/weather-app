import React from "react"
import profile from "../assets/profile_pic.png"
import { signOut } from "firebase/auth"
import { FaMagnifyingGlass } from 'react-icons/fa6'

function Nav() {
    return (
        <div className="nav">
            <div className="search">
                <input type="text" placeholder="Search city" />
                <FaMagnifyingGlass strokeWidth={1} fontWeight={300} stroke={'red'} />
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
