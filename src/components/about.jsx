import AOS from "aos"
import "aos/dist/aos.css"
const About=()=>{
    AOS.init({duration:2000,offset:200,})
    return(
        <div className="about">
            <h2 id="heading">About Me</h2>
            <div className="section1">
            <div className="box1" data-aos="slide-up">
                Hey guys this is Rajdeep Chakraborty. I am a third year Engineering student in the field of Computer Science 
                specializing in Artificial Intelligence and Machine Learning. I am a passionate technical enthusiast but that is not 
                the only side to me. As a person with varying interests, I do like to keep experimenting with various stuff aside my 
                technical degree only. Photography come out to be one of those interests where I have a growing interest and have
                been practicing it for over two years now. This is my webpage and here I shall update the various sides to me, my interests
                as well as my skills as I go through the opportunities in life and grow further as a person ! So do check on me from time to
                time here, and hopefully I will have something more to show you than last time !

            </div>
            <div className="box2" data-aos="slide-up">
                <img id="myphoto" src="src/components/DSC00565s.jpg"></img>
            </div>
            </div>
            <div className="section 2">
            
            </div>
        </div>
    )
}

export default About