import { Link, Head } from '@inertiajs/react';
import {Navbar} from "../Components/component/Navbar";
import {Header} from "../Components/component/Header";
import {About} from "../Components/component/About";
import {Skill} from "../Components/component/Skill";
import {Contact} from "../Components/component/Contact";
import {Footer} from "../Components/component/Footer";

export default function Welcome(props) {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Skill/>
            <Contact/>
            <Footer/>
        </div>
    );
}
