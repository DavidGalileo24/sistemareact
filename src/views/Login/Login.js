import React,{ } from 'react';
//Libraries
import {Container, Row, Col, Button} from 'react-bootstrap'

//functions
const formSubmit = () => {

}
const formInput1 = () => {

}
const formInput2 = () => {
    
}
const formEvent = () => {

}

const Login=()=>{
    return(

        <Container>
            <Row>
                <Col md={7} xs={0}>
                    <img src="" className="" alt="Banner Diparvel" />
                </Col>
                <Col md={5} xs={12}>
                    <form onSubmit={formSubmit}>
                        <img src="" alt="Logo Diparvel" />
                        <p>
                            <input type="text" name="username" id="username" className='form-control' onChange={formInput1} />
                        </p>
                        <p>
                            <input type="password" name="password"  id="username" className='form-control' onChange={formInput2} />
                        </p>
                        <br></br>
                        <p>
                            <Button variant="primary" onClick="formEvent">
                                Ingresar
                            </Button>
                        </p>
                        <p className='text-center'>¿Olvidaste tu contraseña?</p>
                    </form>
                </Col>
            </Row>
        </Container>

    );
}
export default Login;