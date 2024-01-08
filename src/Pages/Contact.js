import React from "react";
import "./Contact.css";
import Table from "react-bootstrap/Table";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { FaUnlockAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

export const Contact = () => {
    return (
        <Container fluid className="bg-warning">

            <Row>
                <Col md={6} className="bg-info p-3">
                    <Row>
                        <Col md={12}>
                            <div>
                                <input type="text" className="contact_addnewcontact_input"></input>
                            </div>
                            <button className="contact_addnewcontact_button mt-3">Add New Contact Group</button>
                        </Col>
                    </Row>
                </Col>

                <Col md={6} className="p-3">
                    <Row>
                        <Col md={6}>
                            <input type="text" className="contact_addnewcontact_input"></input>
                        </Col>
                        <Col md={6}>
                            <input type="text" className="contact_addnewcontact_input"></input>
                        </Col>

                        <Col md={12} className="pt-3">
                            <input type="text" className="contact_addnewcontact_input"></input>
                        </Col>

                        <Col md={12}>
                            <button className="contact_addnewcontact_button mt-3">Add New Contact Group</button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="bg-secondary">
                <h1 className="text-center">CCD Contact Banglore</h1>
                <Col md={12} className="p-3">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>S.no.</th>
                                <th>Contact name</th>
                                <th>Email</th>
                                <th>Phone no.</th>
                                <th>Remarks</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>Benginner AI Course</td>
                                <td>Deepak@gmail.com</td>
                                <td>123456789</td>
                                <td>pass</td>
                                <td>
                                    <button className="contact_table_delete_btn">
                                        <AiOutlineDelete className="text-danger" />
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Benginner AI Course</td>
                                <td>Deepak@gmail.com</td>
                                <td>123456789</td>
                                <td>pass</td>
                                <td>
                                    <button className="contact_table_delete_btn">
                                        <AiOutlineDelete className="text-danger" />
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Benginner AI Course</td>
                                <td>Deepak@gmail.com</td>
                                <td>123456789</td>
                                <td>pass</td>
                                <td>
                                    <button className="contact_table_delete_btn">
                                        <AiOutlineDelete className="text-danger" />
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Benginner AI Course</td>
                                <td>Deepak@gmail.com</td>
                                <td>123456789</td>
                                <td>pass</td>
                                <td>
                                    <button className="contact_table_delete_btn">
                                        <AiOutlineDelete className="text-danger" />
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Benginner AI Course</td>
                                <td>Deepak@gmail.com</td>
                                <td>123456789</td>
                                <td>pass</td>
                                <td>
                                    <button className="contact_table_delete_btn">
                                        <AiOutlineDelete className="text-danger" />
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>Benginner AI Course</td>
                                <td>Deepak@gmail.com</td>
                                <td>123456789</td>
                                <td>pass</td>
                                <td>
                                    <button className="contact_table_delete_btn">
                                        <AiOutlineDelete className="text-danger" />
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>Benginner AI Course</td>
                                <td>Deepak@gmail.com</td>
                                <td>123456789</td>
                                <td>pass</td>
                                <td>
                                    <button className="contact_table_delete_btn">
                                        <AiOutlineDelete className="text-danger" />
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>Benginner AI Course</td>
                                <td>Deepak@gmail.com</td>
                                <td>123456789</td>
                                <td>pass</td>
                                <td>
                                    <button className="contact_table_delete_btn">
                                        <AiOutlineDelete className="text-danger" />
                                    </button>
                                </td>
                            </tr>

                           
                        </tbody>
                    </Table>
                </Col>

                <Col md={12}>
                    <button className="contact_table_delete_btn">
                        <FaUnlockAlt className="text-warning"/>
                    </button>
                    <button className="contact_table_delete_btn mx-3">
                    <IoMdAdd className="text-success"/>
                    </button>
                    
                </Col>

                <h1 className="text-center">Strategy Channel Mahesh</h1>
            </Row>

        </Container>
    );
};
