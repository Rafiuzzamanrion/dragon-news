import React, {useContext} from 'react';
import {Button, Container,Form} from 'react-bootstrap';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../provider/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0'

    const handleSignIn = event =>{
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email,password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from,{replace:true})
      })
      .catch(error =>{
        console.log(error)
      })
    }

    return (
       <Container className='mx-auto w-25 mt-4 bg-body-secondary p-5 rounded'>
        <h3>Please login</h3>
         <Form onSubmit={handleSignIn}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' required placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='w-100 bg-dark my-4'  variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-black">
    Don't have an account?
         <Link className='text-decoration-none text-danger fw-bold' to='/register'> Register</Link>
        </Form.Text>
    <Form.Text className="text-success">
         
        </Form.Text>
    <Form.Text className="text-danger">
         
        </Form.Text>
    </Form>
   
       </Container>
    );
};

export default Login;