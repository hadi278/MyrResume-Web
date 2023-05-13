import React, {useState} from "react";
import "../compoenent-css/Footer.css";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {AiFillCopyrightCircle} from "react-icons/ai";

export const Footer = () => {
    const [ activeNav, setActiveNav] = useState('#')
    const [open, setOpen] =useState(false)
    return (
        <div className="bg-[#1B262C] flex flex-wrap grid grid-cols-1 justify-items-center py-10">
           <div>
               <h1 className="text-4xl font-bold"> HADI RACHMAT S</h1>
           </div>
            <div className="py-11">
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in top-24 gap-4 ${open ?'top-0' : 'top-[-175px]'} `}>
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
            </div>
            <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
                {/*<ButtonNav>*/}
                {/*    <BsFillMoonStarsFill/>*/}
                {/*</ButtonNav>*/}
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
            <div className="flex grid-cols-5 gap-5 py-2">
                <div>
                    <a href="https://www.instagram.com/hadi.rachmat01/"> <AiOutlineInstagram className="text-3xl"/> </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/hadi-rachmat-4266921b6/"> <AiFillLinkedin className="text-3xl"/> </a>
                </div>
                <div>
                    <a href="https://github.com/hadi278"> <AiFillGithub className="text-3xl"/> </a>
                </div>
                <div>
                    <a href="https://twitter.com/HadiRachmat5"> <AiFillTwitterCircle className="text-3xl"/> </a>
                </div>
                <div>
                    <a href="https://wa.me/6285793710978/"> <AiOutlineWhatsApp className="text-3xl"/> </a>
                </div>
            </div>
            <div className="flex flex-wrap gap-1">
                <AiFillCopyrightCircle className=" text-3xl"/>
                <p> 2023, All Right Reserved, Informtics Production</p>
            </div>
        </div>
    )
}
