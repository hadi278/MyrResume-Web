import React from "react";
import{BsFillMoonStarsFill} from "react-icons/bs";

export const ButtonNav = (props) => {
    return (
        <div className="text-white py-2 px-6 rounded md:ml-8 ">
            <button className="mr-2 pt-2 hover:text-cyan-500 duration-500" >
                {props.children}
            </button>
        </div>
    )
}