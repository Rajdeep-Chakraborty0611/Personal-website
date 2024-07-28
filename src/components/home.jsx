import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Home=()=>{
    useEffect(()=>{
        AOS.init({duration:2000,offset:300})
    },[])
    return(
        <div>
            <div className="container1">
           <h2 id="home">Welcome To My Page</h2>

           </div>
        <div className="container2" data-aos="fade-up">
           <h2 id="skill">Skills</h2>
           <div className="cards" data-aos="slide-up">
            <div className="eachcard">
                
                <img id="javalogo" src="src/components/java-logo-1.png"></img>
                
            </div>
            <div className="eachcard">
                
            <img id="clogo" src="src/components/C_Logo.png"></img>
                
            </div>
            <div className="eachcard">
            <img id="reactlogo" src="src/components/React_(web_framework)-Logo.wine.png"></img>
            </div>
           </div>
        </div>
        <div className="container3" data-aos="fade-up" data-aos-easing="ease-in">
           <h2>Section 3</h2>
           <div className="cards" data-aos="slide-up">
            <div className="eachcard">
                <h3>
                    Title
                </h3>
                <p>contents of box 1</p>
            </div>
            <div className="eachcard">
                <h3>
                    Title
                </h3>
                <p>contents of box 2</p>
            </div>
            <div className="eachcard">
                <h3>
                    Title
                </h3>
                <p>contents of box 3</p>
            </div>
           </div>
        </div>
        </div>
        
        
    )
    
}

export default Home