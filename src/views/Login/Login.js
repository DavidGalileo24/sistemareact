import React,{Components } from 'react';
//Libraries
import {Container, Row, Col, Button, Alert} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

class Login extends Components{

    //Variables
   state= {
       form:{
           'username': '',
           'password': ''
       }
   } 
   

    //functions
    handleChange = async(event) => {
        await this.setState({
            ...this.state.form,
              [event.target.name]: event.target.value
        });
            
    }
    handleSubmitf = (event) => {
        event.preventDefault();
        useNavi('/inicio');
        
        
    }
    handleSubmit = () => {
        axios.post('http://localhost:3001/usuario', {
            username: username,
            password: password
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log("error")
        }) 
    } 

   
    render(){
        return(
            <Container>
            <Row>
                <Col md={7} xs={0}>
                    <img src="" className="" alt="Banner Diparvel" />
                </Col>
                <Col md={5} xs={12}>
                    <form onSubmit={handleSubmitf}>
                        <img src="" alt="Logo Diparvel" />
                        <p>
                            <input type="text" name="username"  id="username" className='form-control' onChange={handleChange} />
                        </p>
                        <p>
                            <input type="password" name="password"  id="password" className='form-control'  onChange={handleChange} />
                        </p>
                        <br></br>
                        <p>
                            <Button variant="primary" onClick={handleSubmit} >
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
    
}
export default Login;