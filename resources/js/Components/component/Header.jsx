import React from "react";
import "../compoenent-css/Header.css";
import {Navbar} from "./Navbar";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
// import Typed from 'react-typed';
import IMG1 from '../../../assets/White-photo.jpg';
import 'animate.css';


import {useState, useEffect} from "react";
export const Header = () => {
    const toRotate =["Web Developer", "Web Frelancer", "Self Employed"];
    const [loopName, setLoopName] = useState(0);
    const [delName, setDelname] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] =useState(300-Math.random() + 100);
    const period = 500;

    const tick = () =>{
        let i = loopName % toRotate.length;
        let fullText = toRotate[i];
        let updateText = delName ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

        setText(updateText);
        if (delName){
            setDelta( prevDelta => prevDelta/2)
        }
        if (!delName && updateText === fullText){
            setDelname(true);
            setDelta(period);
        }else if (delName && updateText === ''){
            setDelname();
            setLoopName(loopName + 1);
            setDelta(100)
        }
    }

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return  ()=>{clearInterval(ticker)}
    }, [text])
    return (
        <header className="">
            <div className="flex justify-between items-center py-36 md:px-14 px-7  ">
                <div className="icon__container text-2xl text-cyan-500 justify-items-center cursor-pointer">
                    <a href=" https://twitter.com/HadiRachmat5"> <BsTwitter className="md:mx-auto m-0.5 hover:text-white duration-500 delay-100"/></a>
                    <a href="https://www.linkedin.com/in/hadi-rachmat-4266921b6/"> <BsLinkedin className="md:mx-auto m-0.5 hover:text-white duration-500 delay-100"/> </a>
                    <a href="https://github.com/hadi278"> <BsGithub className="md:mx-auto m-0.5 hover:text-white duration-500 delay-100"/></a>
                </div>
                <div className="flex-row text-center md:mx-auto static">
                   <span className="image__white">
                        <img src={IMG1} alt="" width="200" className=" h-auto max-w-lg mx-auto m-2"/>
                   </span>
                    <h3 className=" text-2xl ">
                        Hello I'm Hadi Rachmat Supindar
                    </h3>
                    <div className="text-5xl font-bold " id="me">
                        <p>As <span>{text}</span></p>
                    </div>
                    <button className=" button__download  md:px-12 bg-[#3282B8] md:h-10 m-2 hover:bg-white hover:text-[#3282B8] duration-500 rounded-lg ">
                        DOWNLOAD
                    </button>
                </div>
                <div className=" ">
                    <div className=" text-cyan-500 hover:text-white">
                        <a href="">
                            <p>M</p>
                            <p>y</p>
                            <p>p</p>
                            <p>o</p>
                            <p>r</p>
                            <p>t</p>
                            <p>f</p>
                            <p>o</p>
                            <p>l</p>
                            <p>i</p>
                            <p>o</p>
                        </a>
                    </div>
                </div>
            </div>

        </header>


    )
}
