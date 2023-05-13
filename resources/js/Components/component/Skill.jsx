import React from "react";
import "../compoenent-css/Skill.css";

export const Skill = () => {
    return (
        <section id='skill' className="h-max md:mx-auto md:my-auto md:py-20 py-auto px-16">
            <div className="flex grid grid-rows-2 justify-items-center">
               <h1 className="text-4xl font-extrabold underline md:mx-auto animate-bounce"> My Skill </h1>
                <h3 className=" "> " This Is My Experiance For Using Some Technology "</h3>
            </div>
            <div className="experiance-items grid grid-cols-2 md:mx-auto md:px-12 gap-4  ">
                <div className="experiance-item md:p-2 p-2"data-aos="fade-up" data-aos-delay="200" >
                    <div className="experiance-info flex justify-between">
                        <p> Html</p>
                        <p> 90%</p>
                    </div>
                    <div className="progress-line  bg-[#1B262C] rounded-xl" data-percent="90%" >
                        <span style={{width:"90%"}} className="bar"></span>
                    </div>
                </div>
                <div className="experiance-item  md:p-2 p-2"data-aos="fade-up" data-aos-delay="200">
                    <div className="experiance-info flex justify-between ">
                        <p> CSS</p>
                        <p> 85%</p>
                    </div>
                    <div className="progress-line bg-[#1B262C] rounded-xl " data-percent="80%">
                        <span style={{width:"85%"}} className="bar"></span>
                    </div>
                </div>
                <div className="experiance-item md:p-2 p-2"data-aos="fade-up" data-aos-delay="300">
                    <div className="experiance-info flex justify-between">
                        <p> php</p>
                        <p> 60%</p>
                    </div>
                    <div className="progress-line bg-[#1B262C] rounded-xl " data-percent="65%">
                        <span style={{width:"60%"}} className="bar"></span>
                    </div>
                </div>
                <div className="experiance-item md:p-2 p-2"data-aos="fade-up" data-aos-delay="300">
                    <div className="experiance-info flex justify-between">
                        <p> javascript</p>
                        <p> 70%</p>
                    </div>
                    <div className="progress-line bg-[#1B262C] rounded-xl " data-percent="77%">
                        <span style={{width:"70%"}} className="bar"></span>
                    </div>
                </div>
                <div className="experiance-item md:p-2 p-2"data-aos="fade-up" data-aos-delay="400">
                    <div className="experiance-info flex justify-between">
                        <p> React JS</p>
                        <p> 80%</p>
                    </div>
                    <div className="progress-line bg-[#1B262C] rounded-xl " data-percent="80%">
                        <span style={{width:"80%"}} className="bar" ></span>
                    </div>
                </div>
                <div className="experiance-item md:p-2 p-2"data-aos="fade-up" data-aos-delay="400">
                    <div className="experiance-info flex justify-between">
                        <p> laravel</p>
                        <p> 65%</p>
                    </div>
                    <div className="progress-line bg-[#1B262C] rounded-xl " data-percent="65%">
                        <span style={{width:"65%"}} className="bar"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}
