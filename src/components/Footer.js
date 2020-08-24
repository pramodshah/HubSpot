import React,{Component} from 'react';
import './Footer.css';
class  Footer extends Component {
  
    
    render() {

        return(
        <div className="Footer">


        <footer className="page-footer" style={{backgroundColor:"rgb(51,71,91)"}}>
                <div className="container" >
                    <div className="row">
                        <div className="col s3">
                        <p className="footer-header">Increase Your Traffic</p>
                            <ul>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Ad Software</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Blog Software</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">SEO Software</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Social Media Software</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Content Management System</a></li>
                            </ul>
                        </div>
                        <div className="col s3">
                        <p className="footer-header">Connect With Leads</p>
                            <ul>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Find New Prospects</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Email Tracking</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Link 3Sales Email Templates</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Click to Call Your Leads</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Email Marketing</a></li>
                            </ul>

                        </div>
                        <div className="col s3">
                            <p className="footer-header">Close and Manage Leads</p>
                            <ul>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Document Tracking Tool</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Meeting Schedule Tool</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Sales Automation Tool</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Lead Management Tool</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Pipeline Management Tool  </a></li>
                            </ul>
                        </div>
                        <div className="col s3">

                            <p className="footer-header">Support and Tools</p>
                            <ul>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">HubSpot Partners</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Join a Local User Group</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">PieSync Integrations</a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Free Tools  </a></li>
                                <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">& Generators </a></li>
                                
                            </ul>
                            
                            
                        </div>
                        
                        

                        
                    </div>
                    <div className="row"> 
                    <div className="footer-info1">

                            <a href="#" className="btn" style={{backgroundColor:"#FF7A59"}}>Contact Hubsopt Support</a>
                        </div>


                    </div>
                    <div className="row">
                    <div className="footer-info3" style={{margin:"auto"}}>
                            <a style={{padding:"10px",color:"white"}}>English</a>
                            <a style={{padding:"10px",color:"white"}}>Deutsch</a>
                            <a style={{padding:"10px",color:"white"}}>日本語</a>
                            <a style={{padding:"10px",color:"white"}}>Español</a>
                            <a style={{padding:"10px",color:"white"}}>Português</a>
                            <a style={{padding:"10px",color:"white"}}>Français</a>

                        </div>

                        <hr></hr>

                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                    © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
        </footer>
           
        </div>
        )
    }
    
}


export default Footer;

