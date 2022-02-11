import React,{ } from 'react';
//Libraries
import {Container, Row, Col, Button} from 'react-bootstrap'
import { HiUserCircle } from "react-icons/hi";
//functions


const Navbar=()=>{
    return(

        <Container>
            <Row>
                <Col md={2} xs={6}>
                <img src="" className="" alt="Logo Diparvel" />
                </Col>
                <Col md={8} xs={0}></Col>
                <Col md={2} xs={6} className="btn btn-outline-secondary">
                    <div>
                        <HiUserCircle />
                    </div>
                    <div>
                        User Name
                    </div>
                </Col>
            </Row>
        </Container>

    );
}
export default Navbar;