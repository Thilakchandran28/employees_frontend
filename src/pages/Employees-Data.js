import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CSVLink } from 'react-csv';

import HeaderComponent from '../components/header-component';
import FooterComponent from '../components/footer';

const EmployeesData = () => {
    useEffect(() => {
        loadData();
    }, []);

    const [employeesData, updateEmployeesData] = useState([]);

    const loadData = () => {

        const url = "http://localhost:5000/api/list/data";

        axios.get(url)
            .then((response) => {
                updateEmployeesData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const List = employeesData.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.name}</td>
                <td>{value.designation}</td>
                <td>{value.email}</td>

                <td><button className="btn btn-outline-danger " onClick={() => deleteData(value.id)}>Delete</button></td>

            </tr>
        )
    })

    const deleteData = (id) => {
        const url = "http://localhost:5000/api/delete/data/" + id;
        axios.delete(url)
            .then((response) => {
                alert(response.data);
                loadData();

            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <main id="main">
                <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div className="container">
                        <h2>Employees Information</h2>
                    </div>
                </div>
                <div className="tab-le">
                    <table className="table table-bordered tab-le">
                        <thead className="cl-bdr ">
                            <tr>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>E-mail</th>
                                <th>
                                    Delete</th>
                            </tr>
                        </thead>

                        <tbody className="cl-bdr ">
                            {List}
                        </tbody>
                    </table>
                </div>
                <div className="tab-le">

                <h4>Download employees data :</h4>
                <CSVLink data={employeesData} filename={"employees.csv"}>Download CSV</CSVLink>

                </div>
            </main>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default EmployeesData;