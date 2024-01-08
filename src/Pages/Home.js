import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Home = () => {
    return (
        <Container fluid  style={{height:"100vh" , backgroundColor:"#efe6dd"}}>
            <Row>
                <h1 className="text-center m-0 bg-danger">LISTS AND CONTACTS</h1>
                <Col md={2} style={{backgroundColor:"#c5edac",height:"100vh" }}>
                    <Sidebar />
                </Col>
                <Col md={10}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};
