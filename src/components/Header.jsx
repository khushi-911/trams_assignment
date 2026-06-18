import { LiaEqualsSolid } from "react-icons/lia";
import {WavyUnderline} from "./WavyUnderLine";
import { Images } from "./Images";
export function Header() {
    return(
        <div className="outer-box">
            {/* navbar */}
                <nav className="navbar">
                    <div className="logo">
                        Elementum
                    </div>
                    <ul className="nav-sections">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Studio">Studio</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#FAQs">FAQs</a></li>
                    </ul>
                    <div className="menu"><LiaEqualsSolid /></div> 
                </nav>

            {/* hero section */}
            <div>

                {/* text section */}
                <section className="hero-section">

                    
                    <div className="main-heading">
                        <h1>The <WavyUnderline text="thinkers"/> and <br/>
                        doers were <span className="changing"> changing</span>
                        <span className="purple-ellise"></span>
                        <br/>the <span className="status">status </span> Quo with</h1>
                    </div>
                  
                    <span className="sub-heading">We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only hghappens when you refuse to play things safe.</span>
                </section>

                {/* image-section */}
                <Images/>
            </div>
        </div>
    );
};