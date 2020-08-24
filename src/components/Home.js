import React,{Component} from 'react';
class  Home extends Component{
  
    
    render(){

        return(
            <div className="Home">

                <nav  style={{backgroundColor:"white", height:"75px",textDecoration:"none"}}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">HubSpot</a>
                    <ul id="nav-mobile" class="right">
                        <li style={{paddingLeft:"5px",paddingRight:"5px"}}><a className="nav-link" href="sass.html">Software</a></li>
                        <li style={{paddingLeft:"5px",paddingRight:"5px"}}><a className="nav-link"href="badges.html">Priceing</a></li>
                        <li style={{paddingLeft:"5px",paddingRight:"5px"}}><a className="nav-link" href="collapsible.html">Resources</a></li>
                        <li style={{paddingLeft:"5px",paddingRight:"5px"}}><a className="nav-link" href="collapsible.html">Partners</a></li>
                        <li style={{paddingLeft:"5px",paddingRight:"5px"}}><a className="nav-link"href="collapsible.html">About</a></li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
    
}

export default Home;

