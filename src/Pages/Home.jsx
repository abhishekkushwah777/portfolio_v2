import "../Styles/Home.css";
import Navbar from "../Components/Navbar";
import Button from "../Components/Buttons";
import { Navigate, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";



function Home() {
    const Navigate = useNavigate();
    return (
        <>
        <Navbar />
        <section className="home">
            <div className="title">
                <h1>ABHISHEK <br />
                 KUSHWAH</h1>
                <TypeAnimation 
                className="animated-text"
                    sequence={[
                        "Software Engineer",
                        1000,
                        "Web Developer",
                        1000,
                        "UI/UX Designer",
                        1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                />
                <p>I am a software engineer with a passion for building web applications.</p>
                <div className="ctabuttons">
                    <Button name="primary" text="View Projects" onClick={()=> Navigate("/Projects")
                    } />
                    <Button name="secondary" text="Contact Me" onClick={()=> Navigate("/Contact")} />
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;
