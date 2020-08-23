import React,{Component} from 'react';
import './ContentSecond.css';


class  ContentSecond extends Component {
    
    
    render() {

        return(
        <div className="Content">
           <div classname="row image-hugspot">
             <div className="container">
                    <p style={{fontSize:"3rem",fontFamily:"revert"}}>There’s a better </p>
                    <p style={{fontSize:"3rem",fontFamily:"revert",paddingTop:-"20px"}}>way to grow.</p>
                    <p>Marketing, sales, and service software that helps your business grow without compromise. Because “good for the business” should also mean “good for the customer.”</p>
                 </div> 
           
               <div classname="column">

               <div className="bg1" />
               
               
               </div>
               <div classname="column">
               <div className="bg2" />
               </div>
               <div classname="column">
               <div className="bg3" />
               </div>

           </div>
            
        </div>
        )
    }
    
}


export default ContentSecond;

