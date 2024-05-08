import React from 'react';
import { NavLink } from 'react-router-dom';


const FooterComponent = () => {
    return (
        <div className='bgclr'>
             <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3 className='heading-color'>Address</h3>
                                <p>
                                    126, center Tower,<br></br>
                                    Manukam lane,<br></br> 
                                    opposite to GMK Railway Station,<br></br>
                                    near Subway,<br></br>
                                    Cananda Institutional Area,<br></br>
                                    SIDCO education Estate,<br></br>
                                    Guindy, Tamil Nadu<br></br><br></br>
                                    <strong>Phone:</strong> 9666881220 | 9684335416<br></br>
                                    <strong>Email:</strong> tkemploy@gmail.com | tke@tkemploy.com<br></br>
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h3 className="heading-color">Useful Links</h3><br></br>
                                <ul>
                                    <li><NavLink to="/" style={{ textDecoration: "none" }}><i className="bx bx-chevron-right"></i> Home</NavLink></li>
                                    <li><NavLink to="/enter" style={{ textDecoration: "none" }}><i className="bx bx-chevron-right"></i> EnterData</NavLink></li>
                                    <li><NavLink to="/employ" style={{ textDecoration: "none" }}><i className="bx bx-chevron-right"></i> Detail</NavLink></li>
                                   
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h3 className='heading-color'>Requirements</h3><br></br>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i>  Outstanding  </li>
                                    <li><i className="bx bx-chevron-right"></i> Exceeds Expectations</li>
                                    <li><i className="bx bx-chevron-right"></i> Meets Expectations</li>
                                    <li><i className="bx bx-chevron-right"></i> Needs Improvement</li>
                                    <li><i className="bx bx-chevron-right"></i> Data Analyst</li>
                                    <li><i className="bx bx-chevron-right"></i> Unacceptable</li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter icaj">
                                <img src={require("../img/Logo.png")} width={350} height={400}></img>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            <h5>&copy;  2024  <strong><span>Copyright: </span></strong>TK Employees Analysis</h5>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>

        </div>
    );
};

export default FooterComponent;