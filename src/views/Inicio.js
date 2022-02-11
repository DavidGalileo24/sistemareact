import React, {Fragment} from 'react';
import Navbar from '../templates/Navbar';
import Cards from '../templates/Cards';
//Libraries
import {Container, Row, Col, Button} from 'react-bootstrap'
const Inicio = () => {
    return(
       <Fragment>
            <Navbar />
            <br/> <br/>
            <Container>
                <Row>
                    <Col md={4}>
                        <Cards title="Lorem ipsum" />
                    </Col>
                    <Col md={4}>
                        <Cards title="Lorem ipsum dolor" />
                    </Col>
                    <Col md={4}>
                        <Cards title="Lorem ipsum 3" />
                    </Col>
                </Row>
            </Container>            
       </Fragment>

    );
}
export default Inicio;