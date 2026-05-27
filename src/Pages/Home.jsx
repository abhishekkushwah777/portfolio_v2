import "../Styles/Home.css";

function Home() {
    return (
        <section className="home">
            <div className="title">
                <h1>ABHISHEK <br />
                 KUSHWAH</h1>
                <h2>Software Engineer</h2>
                <p>I am a software engineer with a passion for building web applications.</p>
                <div className="glasscube" style={{
                    // mixBlendMode : darkMode ? "lighten" : "difference"
                }}>
                    <img src="/glasscube.jpg" alt="background_asset" />
                </div>
            </div>
        </section>
    );
}

export default Home;
