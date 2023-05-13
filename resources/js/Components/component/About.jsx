import React from "react";
import '../compoenent-css/About.css';
import IMG2 from  '../../../assets/black_photo.jpg';
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';


export const About = () => {
    AOS.init();
    return (
        <section id='about' className="h-max mx-auto py-20 px-20 translate-y-5 ">
            <div className=" flex grid grid-rows-2 justify-items-center">
                <h2 className=" md:mx-auto text-3xl font-bold underline" data-aos="fade-up" data-aos-delay="200">
                    ABOUT ME
                </h2>
                <p className= "italic " data-aos="fade-up" data-aos-delay="200"> " Successus Notatos Constantia, Consecutio et Oratio "</p>
            </div>
            <div className=" flex grid grid-cols-2 md:mx-auto mx-3 md:my-auto py-8 gap-10 justify-items-center">
                <div className= "rounded-xl mx-auto my-auto bg-gradient-to-tr via-[#BBE1FA] from-transparent to-transparent">
                    <img src={IMG2} alt="" width='300' className="  rotate-12 static rounded-xl hover:rotate-0 duration-500 delay-100"/>
                </div>
                <div className="">
                    <h3 className="text-2xl font-semibold text-[--color-primary]" data-aos="fade-up" data-aos-delay="200"> I'm</h3>
                    <h2 className=" text-3xl font-bold" data-aos="fade-up" data-aos-delay="200"> Hadi Rachmat S</h2>
                    <p data-aos="fade-up" data-aos-delay="200" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, dicta dignissimos labore magnam necessitatibus reprehenderit sequi sint temporibus. A blanditiis ea eius expedita fugiat molestiae, officia qui recusandae repellat reprehenderit.
                    </p>
                    <table className="" data-aos="fade-up" data-aos-delay="200">
                        <tbody className="">
                            <tr className="">
                                <td className="md:p-2"> Name </td>
                                <td className="md:p-2"> : </td>
                                <td className="md:p-2"> Hadi Rachmat S</td>
                            </tr>
                            <tr>
                                <td className="md:p-2"> Phone </td>
                                <td className="md:p-2"> : </td>
                                <td className="md:p-2"> +62 857 9371 0978</td>
                            </tr>
                            <tr>
                                <td className="md:p-2"> Age </td>
                                <td className="md:p-2"> : </td>
                                <td className="md:p-2"> 21</td>
                            </tr>
                            <tr>
                                <td className="md:p-2"> Address </td>
                                <td className="md:p-2"> : </td>
                                <td className="md:p-2"> Sukabumi, West Java Indonesia</td>
                            </tr>
                            <tr>
                                <td className="p-2"> Freelance </td>
                                <td className="p-2"> : </td>
                                <td className="p-2"> Available</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex md:mx-auto m-1">
                        <a href="https://twitter.com/HadiRachmat5" >
                            <BsTwitter className="text-3xl m-1 text-[--color-primary-variant] hover:text-[--color-white] cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/hadi.rachmat01/" >
                            <BsInstagram className="text-3xl m-1 text-[--color-primary-variant] hover:text-[--color-white] cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/in/hadi-rachmat-4266921b6/" >
                            <BsLinkedin className="text-3xl m-1 text-[--color-primary-variant] hover:text-[--color-white] cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
