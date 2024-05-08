import React, { useState } from 'react';
import axios from 'axios';

import HeaderComponent from '../components/header-component';
import FooterComponent from '../components/footer';



const EnterData = () => {




    const [uploadedData, updateUploadedData] = useState({

        name: "",
        designation: "",
        email: ""


    });


    const [uploadedError, updateUploadedError] = useState({

        name: false,
        designation: false,
        email: false,


    });


    // ----------------onchange------------------

    const getInput = (event) => {
        updateUploadedData({ ...uploadedData, [event.target.id]: event.target.value });
    }


    // ----------------onclick------------------

    const uploadDetail = () => {
        console.log(uploadedData);

        // ----------------error------------------

        updateUploadedError({
            ...uploadedError,

            name: uploadedData.name === "" ? true : false,
            designation: uploadedData.designation === "" ? true : false,
            email: uploadedData.email === "" ? true : false,
        });

        if (uploadedData.name === "" ||
            uploadedData.designation === "" ||
            uploadedData.email === ""
        ) {
            // Do not submit the form if any field is empty
            return;
        }


        // ----------API--------------------------------------------

        const url = "http://localhost:5000/api/create/data";

        axios.post(url, uploadedData)
            .then((response) => {
                alert(response.data);


            })
            .catch((error) => {
                console.error(error)

            })

    }


    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div className="container">
                        <h2>Employees to fill the form</h2>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- =======   ======= --> */}

                <section id="contact" className="contact">
                    <div className="container">

                        <div className="row">
                            <div className="row mt-5">



                                <div className="col-lg-8 mt-5 mt-lg-0 container-fluid">

                                    <div className="php-email-form">
                                        <div className="row ">
                                            <div className="form-group mt-3">
                                                <label>Enter Your Name :</label>
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name" onChange={getInput} ></input>
                                                {uploadedError.name && <div className="rq-msg">Required*</div>}
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Your Designation :</label>
                                                <input type="text" name="designation" className="form-control" id="designation" placeholder="Enter your designation" onChange={getInput} ></input>
                                                {uploadedError.designation && <div className="rq-msg">Required*</div>}

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Your E-mail :</label>
                                                <input type="text" name="email" className="form-control" id="email" placeholder="Enter your E-mail" onChange={getInput} ></input>
                                                {uploadedError.email && <div className="rq-msg">Required*</div>}

                                            </div>

                                        </div>


                                        <div className="two-btn">

                                            <div className="trend"><button type="submit" onClick={() => uploadDetail()}>Upload Detail </button></div>



                                        </div>


                                    </div>



                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </main>
            {/* <!-- End #main --> */}

            <FooterComponent></FooterComponent>

        </div>

    );
};

export default EnterData;