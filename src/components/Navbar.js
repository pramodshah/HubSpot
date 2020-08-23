import React,{Component} from 'react';

import './Navbar.css';
class  Navbar extends Component{
  
    state={
        language:"English"
    }
    render(){

        return(
            <div className="Navabr">
                <nav style={{backgroundColor:"rgb(245,248,250)", height:"75px",textDecoration:"none"}}>
                   
               

                    <div class="nav-wrapper">
                        <ul class="left">
                            <li><a className="nav-link" href="badges.html">English</a></li>
                            <li><a className="nav-link" href="badges.html"> | </a></li>
                            <li><a className="nav-link" href="badges.html">Contact Sales</a></li>
                        </ul>
                        <ul class="right ">
                           <li><a className="nav-link" href="sass.html"><i class="material-icons">search</i></a></li>
                            <li style={{paddingLeft:"10px",paddingRight:"10px"}}><a className="btn" href="badges.html"  >Login</a></li>
                            <li style={{paddingLeft:"10px",paddingRight:"10px"}}><a className="btn"  href="badges.html" >GetHubSpotFree</a></li>
                        </ul>
                    </div>
                    
                </nav>
            
            </div>
        )
    }
    
}

export default Navbar;

