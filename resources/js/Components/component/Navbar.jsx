import React, {useState} from "react";
import "../compoenent-css/Nav.css";
import {ButtonNav} from "./ButtonNav";
import {BsFillMoonStarsFill} from "react-icons/bs";

export const Navbar = () => {
    // let Link =[
    //     {name:"HOME" ,link:"/"},
    //     {name:"ABOUT" ,link:"/"},
    //     {name:"SKILL" ,link:"/"},
    //     {name:"CONTACT" ,link:"/"},
    // ]

    const [ activeNav, setActiveNav] = useState('#')
    const [open, setOpen] =useState(false)

    return (
        <div className="shadow-md w-full sticky top-0 left-0 z-20 ">
            <div className="md:flex items-center justify-between bg-[#1B262C] py-1 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
                    <span className="text-3xl text-indigo-600 mr-2 pt-2">
                        <ion-icon name="person-circle-outline"></ion-icon>
                    </span>
                    MY RESUME
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#1B262C] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in top-24 gap-4 ${open ?'top-0' : 'top-[-175px]'} `}>
                    {/*{*/}
                    {/*    Link.map((Link) =>(*/}
                    {/*        <li>*/}
                    {/*            <a href={Link.link}>{Link.name}</a>*/}
                    {/*        </li>*/}
                    {/*    ))*/}
                    {/*}*/}

                    <li className="md:ml-10 md:mr-14 text-xl text-white hover:text-cyan-500 duration-500 font-semibold md:my-0 my-7">
                        <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active':''}>Home</a>
                    </li>
                    <li className="md:ml-10 md:mr-14 text-xl text-white hover:text-cyan-500 duration-500 font-semibold md:my-0 my-7">
                        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}>About</a>
                    </li>
                    <li className="md:ml-10 md:mr-14 text-xl text-white hover:text-cyan-500 duration-500 font-semibold md:my-0 my-7">
                        <a href="#skill" onClick={()=>setActiveNav('#skill')} className={activeNav==='#skill' ? 'active':''}>Skill</a>
                    </li>
                    <li className="md:ml-10 md:mr-14 text-xl text-white hover:text-cyan-500 duration-500 font-semibold md:my-0 my-7">
                        <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}>Contact</a>
                    </li>
                </ul>
                <div className="right-10 top-4">
                    <ButtonNav>
                        <BsFillMoonStarsFill/>
                    </ButtonNav>
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
                    {/*<ButtonNav>*/}
                    {/*    <BsFillMoonStarsFill/>*/}
                    {/*</ButtonNav>*/}
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
            </div>

        </div>
    )
}
