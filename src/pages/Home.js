import React from 'react';
import HeaderComponent from '../components/header-component';

const HomePage = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>


            
            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <h1> TK EmployeesData</h1>
                    <h2>Hands On managers</h2>
                    
                </div>
            </section>

            <section id="about" className="about">
                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
                                <img src={require("../img/about.png")} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>TK EmployeesData has been established with the objective of offering superior  Employees Information services.</h3>
                                <p className="fst-italic">
                                TK EmployeesData provides an integrated Employees Data services, catering to all the human resource and training requirements of a corporate since 2014. Vcentry focuses on providing-
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Comprehensive Talent management solutions to the customers.</li>
                                    <li><i className="bi bi-check-circle"></i>Our talent management pool has always been striving forward to bring the corporate and professionals together to a single point. </li>
                                </ul>
                                <p>
                                    We have always been victorious in what we do, because we know that having the right people in your business is crucial.
                                </p>

                            </div>
                        </div>

                    </div>
                </section>
        </div>
    );
};

export default HomePage;