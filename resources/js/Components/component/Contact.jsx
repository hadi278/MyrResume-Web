import React, {useRef} from "react";
import "../compoenent-css/Contact.css";
import {AiOutlineMail} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i2xoxtf', 'template_ky4hk66', form.current, 'KkJzW_UWI6uMTTR8W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                console.log("gagal")
            })
    }
    return (
        <section id='contact' className="h-max py-16">
            <div className="flex justify-center text-4xl">
                <h1 className="underline font-extrabold" data-aos="fade-up" data-aos-delay="200"> CONTACT ME </h1>
            </div>
            <div className="flex grid grid-cols-2 justify-items-center md:mx-auto px-2 py-16 ">
                {/* FIRST SECTION OF CONTACT */}
                <div className="mx-7 md:mx-auto">
                    <div>
                        <h2 className="text-7xl font-sans" data-aos="fade-up" data-aos-delay="200">Let's Talk</h2>
                        <p data-aos="fade-up" data-aos-delay="200"> Ask Me Anything or Say hii... i Do Anything </p>
                    </div>
                    <div className="py-48">
                        <div className="flex flex-wrap gap-1 p-2">
                            <AiOutlineMail className="text-3xl"/>
                            <a href="https://mail.google.com/"> hadirahmat712@gmail.com</a>
                        </div>
                        <div className="flex flex-wrap gap-1 p-2">
                            <AiOutlineWhatsApp className="text-3xl"/>
                            <a href="https://wa.me/6285793710978/"> +62 857 9371 0978 ( WhatApp )</a>
                        </div>
                    </div>
                </div>
                {/* SECOND SECTION OF CONTACT */}
                <div className="">
                    <form action="" className="w-full max-w-lg"  ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-wrap -mx-3 mb-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="grid-first-name" className="block tracking-wide mb-2">
                                    Name
                                </label>
                                <input type="text"  name="Name" className=" input_border shadow appearance-none block w-full rounded bg-transparent"/>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" data-aos="fade-up" data-aos-delay="200">
                                <label htmlFor="grid-first-name" className="block tracking-wide mb-2">
                                    Email
                                </label>
                                <input type="email" name="email" className=" input_border shadow appearance-none block w-full rounded bg-transparent"/>
                            </div>
                        </div>
                        <div className=" flex flex-wrap -mx-3 mb-6 " >
                            <div className="w-full px-3 md:w-1/2 px-3 mb-6" data-aos="fade-up" data-aos-delay="200">
                                <label htmlFor="Message" className="block tracking-wide mb-2">
                                    Message
                                </label>
                                <textarea name="Message" id="" cols="61" rows="10" className="input_border shadow rounded w-auto"></textarea>
                                <button className="bg-[#3282B8] py-1 px-3 font-bold rounded" type="submit"> Submit </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
