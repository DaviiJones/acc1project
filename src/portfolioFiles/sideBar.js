import React from "react";
import './sideBar.css';

function SideBar() {

return(
    <div className="sideBar">
        <img src="/ME.jpeg" alt="myPhoto"></img>
        <button>
            <span>Welcome!</span>
        </button>
        <button>
            <span>Projects!</span>
        </button>
        <button>
            <span>Skills!</span>
        </button>
        <button>
            <span>Contact!</span>
        </button>
    </div>
)
}
export default SideBar;