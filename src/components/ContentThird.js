import React,{Component} from 'react';
import './ContentThird.css';


class  ContentThird extends Component {
    
    
    render() {

        return(
            <div className="ContentThird">
                <div ClassName="container">
                    <div className="row">
                        <div className="content" style={{marginTop:"15%",marginBottom:"15%",paddingLeft:"13%",paddingRight:"13%"}}>
                                <div className="col s6">
                                    
                                    <p style={{color:"black",fontSize:"2rem",fontWeight:"bold"}}>Start Growing With HubSpot Today</p>
                                    <p>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
                                    <a className="btn" style={{backgroundColor:"#FF7A59"}}>GetHubSpot</a>
                                    <p style={{paddingTop:"20px"}}>Get started with FREE tools, or get more with our premium software.</p>
                                    

                                    
                                    
                                </div>
                                <div className="col s6">
                                    <img class="hsg-deferred hsg-deferred-loaded" data-src="//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sword-sprocket/Variation-3@2x.png" alt="Smiling Person" src="//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sword-sprocket/Variation-3@2x.png" data-was-processed="true" style={{width:"350px",height:"400px",marginLeft:"30%"}}>
                                    </img>
                                </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        )
    }
    
}


export default ContentThird;

