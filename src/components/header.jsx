import { Link } from "react-router-dom"
const Header=()=>{
    return(
        <div>
            
            <ul>
                <li id="unrest"><Link to="/" >RCWEBS</Link></li>
                <li id="rest"><Link to="https://www.instagram.com/_chaosisme_?igsh=YjlhNHZ5cDBuaDI0" ><img src="src/components/7dbd0b51c20a695901a84c4c083500f6.png"></img></Link></li>
                <li id="rest"><Link to="/contact">Contact</Link></li>
                <li id="rest"><Link to="/about" >About</Link></li> 
                <li id="rest"><Link to="/" >Home</Link></li>
                
                
            </ul> 
        </div>
    )
}
export default Header;